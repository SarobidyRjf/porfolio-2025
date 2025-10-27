# ⚡ Guide Rapide - Démarrage en 5 Minutes

## 🎯 Étapes Essentielles

### 1️⃣ Résoudre le problème PowerShell

**Ouvrez PowerShell en tant qu'Administrateur** et exécutez :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Tapez `Y` pour confirmer.

---

### 2️⃣ Installer les dépendances

Ouvrez un terminal dans le dossier `premium-portfolio` :

```bash
npm install
```

⏱️ Cela prendra 2-3 minutes.

---

### 3️⃣ Télécharger une image de profil

**Option A : Utiliser une image de Luffy (exemple)**

Téléchargez une image de Luffy depuis Google Images et :
1. Renommez-la en `luffy.jpg`
2. Placez-la dans le dossier `/public/`

**Option B : Utiliser votre photo**

1. Prenez une photo professionnelle
2. Renommez-la en `luffy.jpg` (ou modifiez le code)
3. Placez-la dans `/public/`

---

### 4️⃣ Personnaliser vos informations (IMPORTANT !)

#### 📧 Email et contacts

Ouvrez `components/sections/Hero.tsx` et modifiez :
- Ligne 54 : `https://github.com/VOTRE-USERNAME`
- Ligne 64 : `https://linkedin.com/in/VOTRE-PROFIL`
- Ligne 78 : `mailto:VOTRE-EMAIL@example.com`
- Ligne 90 : `https://wa.me/33612345678` (votre numéro WhatsApp)

#### 📝 Informations de contact

Ouvrez `components/sections/Contact.tsx` et modifiez :
- Ligne 83 : Votre email
- Ligne 104 : Votre téléphone
- Ligne 122 : Votre localisation

#### 💼 Vos projets GitHub

Ouvrez `components/sections/Projects.tsx` et remplacez les projets exemples (lignes 8-56) par vos vrais projets.

---

### 5️⃣ Lancer le portfolio

```bash
npm run dev
```

Ouvrez votre navigateur sur : **http://localhost:3000**

---

## 🎨 Personnalisation Rapide

### Changer la couleur principale

Éditez `tailwind.config.ts` ligne 18 :

```typescript
500: '#ef4444',  // Rouge par défaut
// Changez en :
500: '#3b82f6',  // Bleu
500: '#10b981',  // Vert
500: '#8b5cf6',  // Violet
```

### Modifier votre nom et titre

Éditez `components/sections/Hero.tsx` lignes 24-30 :

```typescript
<h2>Bonjour, je suis</h2>
<h1>
  <span>Votre Nom</span>
  <br />
  <span>Votre Titre</span>
</h1>
```

---

## 🚀 Déploiement Express (Gratuit)

### Sur Vercel (Le plus simple)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre dossier ou connectez GitHub
4. Cliquez sur "Deploy"

✅ Votre portfolio sera en ligne en 2 minutes !

### Sur Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Attendez le déploiement

---

## 📋 Checklist Minimum

Avant de déployer, vérifiez :

- [ ] ✅ Dépendances installées (`npm install`)
- [ ] ✅ Photo de profil ajoutée
- [ ] ✅ Liens GitHub, LinkedIn, Email, WhatsApp modifiés
- [ ] ✅ Informations de contact mises à jour
- [ ] ✅ Au moins 3 projets personnels ajoutés
- [ ] ✅ Testé en local (`npm run dev`)
- [ ] ✅ Testé le mode sombre/clair
- [ ] ✅ Testé sur mobile (F12 > Mode responsive)

---

## 🎯 Résultat Final

Votre portfolio aura :

✨ **Design Premium**
- Animations fluides et professionnelles
- Mode sombre/clair avec transition douce
- Responsive sur tous les appareils

💼 **Sections Complètes**
- Hero avec photo et liens sociaux
- À propos avec statistiques
- Compétences avec barres de progression animées
- Portfolio de 6 projets avec liens GitHub
- Formulaire de contact fonctionnel

🚀 **Performance**
- Chargement ultra-rapide
- SEO optimisé
- Hébergement gratuit

---

## 💡 Conseils Pro

1. **Photo professionnelle** : Utilisez une photo de qualité, fond neutre, bien éclairée
2. **Projets réels** : Mettez vos vrais projets GitHub, pas les exemples
3. **Description convaincante** : Rédigez une bio qui met en valeur vos compétences
4. **Liens actifs** : Vérifiez que tous vos liens fonctionnent
5. **Orthographe** : Relisez tout le contenu avant de déployer

---

## 🆘 Problèmes Courants

**❌ npm install ne fonctionne pas**
→ Vérifiez que Node.js est installé : `node --version`

**❌ Port 3000 déjà utilisé**
→ Utilisez : `npm run dev -- -p 3001`

**❌ Image ne s'affiche pas**
→ Vérifiez que l'image est bien dans `/public/luffy.jpg`

**❌ Erreurs TypeScript**
→ Normal avant `npm install`, ignorez-les

---

## 🎉 Félicitations !

Vous avez maintenant un portfolio professionnel qui :
- ✅ Impressionnera les recruteurs
- ✅ Montre vos compétences techniques
- ✅ Est moderne et unique
- ✅ Est prêt pour le marché du travail

**Bon courage pour votre recherche d'emploi ! 💪**

---

**Questions ?** Consultez le fichier `INSTALLATION.md` pour plus de détails.
