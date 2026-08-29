[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Message,

  [Parameter(Mandatory = $true)]
  [string[]]$Files
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $repoRoot

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This command must run inside the website's Git clone."
}

$branch = git branch --show-current
if ($branch -ne "main") {
  throw "Production publishes must start from the main branch. Current branch: $branch"
}

git fetch origin main
$localHead = git rev-parse HEAD
$remoteHead = git rev-parse origin/main
if ($localHead -ne $remoteHead) {
  throw "Local main is not synchronized. Run scripts/sync-local-clone.ps1 before making changes, then retry."
}

foreach ($file in $Files) {
  $resolved = Join-Path $repoRoot $file
  if (-not (Test-Path -LiteralPath $resolved)) {
    throw "Requested release file does not exist: $file"
  }
}

pnpm run validate
if ($LASTEXITCODE -ne 0) {
  throw "Validation failed. Nothing was committed or pushed."
}

git add -- $Files
$staged = git diff --cached --name-only
if (-not $staged) {
  throw "No selected file changes are staged. Nothing was published."
}

Write-Host "Files approved for this release:" -ForegroundColor Cyan
$staged | ForEach-Object { Write-Host "  $_" }

git commit -m $Message
git push origin main

$commit = git rev-parse HEAD
Write-Host "Production push complete: $commit" -ForegroundColor Green
Write-Host "Vercel will deploy this main-branch commit automatically."
Write-Host "Reversible history command if ever needed: git revert $commit"
