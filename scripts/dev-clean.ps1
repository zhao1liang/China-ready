# ChinaReady — clean restart dev server (fixes "Cannot find module" / blank page)
$env:PATH = "J:\Node.js®;" + $env:PATH
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "Stopping old Node processes on port 3000..." -ForegroundColor Yellow
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }

Write-Host "Clearing .next cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

Write-Host "Starting dev server at http://localhost:3000" -ForegroundColor Green
npm run dev
