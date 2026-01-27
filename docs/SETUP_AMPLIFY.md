# ☁️ Setup AWS Amplify - TCO Calculator

Guide pour déployer le TCO Calculator sur AWS Amplify.

## Prérequis

- Compte AWS
- Repository Git (GitHub, GitLab, ou CodeCommit)
- Application fonctionnelle en local

## Avantages AWS Amplify

- ✅ CI/CD automatique depuis Git
- ✅ Build et déploiement automatiques
- ✅ HTTPS gratuit
- ✅ CDN mondial intégré
- ✅ Rollback facile
- ✅ Preview branches
- ✅ Variables d'environnement

## Étape 1 : Préparer le repository

### 1.1 Créer un repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit - TCO Calculator v6.0"

# Créer repo sur GitHub et pousser
git remote add origin https://github.com/<votre-username>/tco-calculator.git
git branch -M main
git push -u origin main
```

### 1.2 Vérifier amplify.yml

Le fichier `amplify.yml` doit être à la racine :
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Étape 2 : Créer l'application Amplify

### 2.1 Console AWS Amplify

1. Aller sur [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
2. Cliquer sur **"New app" → "Host web app"**
3. Sélectionner **GitHub** (ou votre provider Git)
4. Autoriser AWS Amplify à accéder à votre repository

### 2.2 Configurer l'application

**Repository** : Sélectionner `tco-calculator`
**Branch** : Sélectionner `main`

**Build settings** :
- Amplify détecte automatiquement `amplify.yml`
- Vérifier que les commandes sont correctes

**App name** : `tco-calculator` (ou votre choix)

### 2.3 Options avancées (optionnel)

**Environment variables** : (aucune nécessaire pour l'instant)

**Service role** :
- Créer un nouveau role (recommandé)
- Ou utiliser un role existant

### 2.4 Lancer le déploiement

Cliquer sur **"Save and deploy"**

⏱️ **Temps de déploiement** : 3-5 minutes

## Étape 3 : Vérifier le déploiement

### 3.1 Phases de build

Amplify exécute 4 phases :
1. **Provision** : Création de l'environnement
2. **Build** : npm ci && npm run build
3. **Deploy** : Upload vers S3 + invalidation CloudFront
4. **Verify** : Tests de santé

### 3.2 URL de l'application

Format : `https://main.<app-id>.amplifyapp.com`

Exemple : `https://main.d3k4m5n6o7p8q9.amplifyapp.com`

## Étape 4 : Configuration du domaine (optionnel)

### 4.1 Domaine custom

1. Dans Amplify → **Domain management**
2. Cliquer sur **"Add domain"**
3. Entrer votre domaine : `tco-calculator.votre-domaine.com`
4. Suivre les instructions pour configurer les DNS

### 4.2 Certificat SSL

- Amplify génère automatiquement un certificat SSL gratuit
- HTTPS activé par défaut

## Étape 5 : Branches et environnements

### 5.1 Environnement de staging

Créer une branche `dev` :
```bash
git checkout -b dev
git push origin dev
```

Dans Amplify :
1. Aller dans **App settings → Branch management**
2. Cliquer sur **"Connect branch"**
3. Sélectionner `dev`

URL staging : `https://dev.<app-id>.amplifyapp.com`

### 5.2 Workflow recommandé

```
dev (staging)  →  Tests  →  main (production)
```

## Workflow de déploiement

### Déploiement automatique

```bash
# Développement local
git add .
git commit -m "feat: ajout discounts"
git push origin main
```

Amplify détecte le push et déploie automatiquement ! 🚀

### Rollback

1. Dans Amplify → **Deployments**
2. Sélectionner un déploiement précédent
3. Cliquer sur **"Redeploy this version"**

## Monitoring

### Logs de build

Amplify → **Build history** → Cliquer sur un build

### Métriques

- Nombre de requêtes
- Data transfer
- Erreurs 4xx/5xx

## Coûts estimés

### Tier gratuit (12 mois)
- 1000 minutes de build/mois
- 15 GB de stockage
- 15 GB de data transfer

### Au-delà du gratuit
- Build : ~$0.01/minute
- Hosting : ~$0.15/GB stocké
- Data transfer : ~$0.15/GB

**Estimation projet TCO Calculator** :
- Build (~3 min/déploiement, 10 déploiements/mois) : ~$0.30/mois
- Hosting (~50 MB) : ~$0.01/mois
- Data transfer (~1 GB/mois) : ~$0.15/mois
- **Total : < $0.50/mois**

## Dépannage

### Build échoue : "npm ci failed"
➡️ Vérifier `package-lock.json` dans Git
```bash
git add package-lock.json
git commit -m "fix: add package-lock"
git push
```

### Build échoue : "Out of memory"
➡️ Augmenter la taille de build
- App settings → Build settings
- Build image : Augmenter à "Large"

### Application ne charge pas
➡️ Vérifier les logs de build
- Vérifier que `dist/` est bien généré
- Vérifier `baseDirectory: dist` dans amplify.yml

### Erreur CORS
➡️ Pas de backend pour ce projet
- Pas d'API calls externes nécessitant CORS

## Prochaines étapes

✅ Application déployée ?
→ Partagez l'URL !

✅ Besoin d'environnements multiples ?
→ Créez des branches dev/staging/prod

✅ Domaine custom ?
→ Configurez dans Domain management
