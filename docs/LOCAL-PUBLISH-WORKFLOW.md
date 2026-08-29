# Local website workflow

Use the same local clone for every website update.

## 1. Synchronize before editing

```powershell
.\scripts\sync-local-clone.ps1
```

This stops instead of overwriting uncommitted work and only fast-forwards `main`.

## 2. Make and verify the update

The production publisher runs the repository's complete `pnpm run validate` gate automatically. A failed build or test stops before commit and push.

## 3. Publish exactly the intended files

```powershell
.\scripts\publish-production.ps1 -Message "Describe the website update" -Files @("main.js", "main.min.js", "index.html")
```

The command stages only the listed files, commits them to `main`, and pushes once. The existing GitHub-to-Vercel integration then deploys that commit to production. Every release remains reversible through its Git commit history.
