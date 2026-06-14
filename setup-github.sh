#!/bin/bash
# Script de déploiement GitHub — Rolex Landing
# Exécute depuis la racine du projet : bash setup-github.sh

set -e

echo "🚀 Setup GitHub pour rolex-landing"

# Nettoie le git partiel si existant
if [ -d ".git" ]; then
  rm -rf .git
  echo "✅ .git partiel supprimé"
fi

# Init
git init -b main
git config user.name "artopx"
git config user.email "ellacott987@gmail.com"

# Stage et commit
git add .
git commit -m "feat: Rolex Day-Date 40 landing page — Next.js 15 + scroll scrub Higgsfield"

# Remote & push
git remote add origin https://github.com/ArtopX-lab/rolex-landing.git
git push -u origin main

echo ""
echo "✅ Déployé sur https://github.com/ArtopX-lab/rolex-landing"
