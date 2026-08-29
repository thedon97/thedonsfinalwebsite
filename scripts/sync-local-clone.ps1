[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $repoRoot

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This command must run inside the website's Git clone."
}

if (git status --porcelain) {
  throw "The clone has uncommitted work. Commit or safely set it aside before syncing. Nothing was changed."
}

git switch main
git fetch origin main
git pull --ff-only origin main

Write-Host "Local main is synchronized with origin/main." -ForegroundColor Green
