# 🚀 Guide d'Installation - Portfolio Premium

## ⚠️ Problème de Politique d'Exécution PowerShell

Si vous rencontrez l'erreur "running scripts is disabled on this system", suivez ces étapes :

### Solution 1 : Autoriser temporairement l'exécution (Recommandé)

Ouvrez PowerShell **en tant qu'administrateur** et exécutez :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Puis confirmez avec `Y` (Yes).

### Solution 2 : Utiliser CMD au lieu de PowerShell

Ouvrez l'**Invite de commandes (CMD)** au lieu de PowerShell et exécutez les commandes npm normalement.

### Solution 3 : Utiliser Git Bash

Si vous avez Git installé, utilisez **Git Bash** qui n'a pas ces restrictions.

---

## 📦 Installation des Dépendances

Une fois le problème de politique résolu, suivez ces étapes :

### 1. Naviguer vers le dossier du projet

```bash
cd e:\porfolio\premium-portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

Cette commande va installer :
- ✅ Next.js 14.2.5
- ✅ React 18.3.1
- ✅ TypeScript 5.5.4
- ✅ Tailwind CSS 3.4.7
- ✅ Framer Motion 11.3.19
- ✅ Lucide React 0.424.0
- ✅ next-themes 0.3.0
- ✅ Et toutes les dépendances de développement

### 3. Ajouter votre photo de profil

Remplacez le fichier `/public/luffy.jpg` par votre photo professionnelle :
- Format recommandé : JPG ou PNG
- Taille recommandée : 800x800px minimum
- Poids : moins de 500KB pour de meilleures performances

### 4. Personnaliser vos informations

#### A. Liens sociaux dans `components/sections/Hero.tsx`

Ligne 54-56 : Remplacez les URLs :
```typescript
href="https://github.com/VOTRE-USERNAME"  // Votre GitHub
href="https://linkedin.com/in/VOTRE-PROFIL"  // Votre LinkedIn
href="mailto:VOTRE-EMAIL@example.com"  // Votre Email
href="https://wa.me/33612345678"  // Votre WhatsApp (format international)
```

#### B. Informations de contact dans `components/sections/Contact.tsx`

Lignes 83, 104, 122 : Mettez à jour :
```typescript
votre.email@example.com  // Votre email
+33 6 12 34 56 78  // Votre téléphone
Paris, France  // Votre localisation
```

#### C. Projets dans `components/sections/Projects.tsx`

Lignes 8-56 : Remplacez par vos vrais projets GitHub :
```typescript
{
  title: "Nom de votre projet",
  description: "Description de votre projet",
  image: "URL de l'image",
  tags: ["React", "Node.js", ...],
  github: "https://github.com/votre-username/votre-projet",
  demo: "https://votre-demo.vercel.app",
}
```

#### D. Biographie dans `components/sections/About.tsx`

Lignes 58-76 : Personnalisez votre présentation professionnelle.

### 5. Lancer le serveur de développement

```bash
npm run dev
```

Le portfolio sera accessible sur : **http://localhost:3000**

### 6. Vérifier le résultat

Ouvrez votre navigateur et testez :
- ✅ Navigation fluide entre les sections
- ✅ Bouton de changement de thème (clair/sombre)
- ✅ Responsive sur mobile (F12 > Mode responsive)
- ✅ Animations au scroll
- ✅ Liens sociaux fonctionnels
- ✅ Formulaire de contact

---

## 🎨 Personnalisation Avancée

### Changer les couleurs principales

Éditez `tailwind.config.ts` ligne 15-25 :

```typescript
primary: {
  500: '#ef4444',  // Couleur principale (rouge par défaut)
  600: '#dc2626',  // Variante plus foncée
  // Changez selon vos préférences
}
```

### Modifier les animations

Éditez `tailwind.config.ts` ligne 37-60 pour ajuster :
- Vitesse des animations
- Type d'animations
- Effets de transition

---

## 🚀 Build et Déploiement

### Build de production

```bash
npm run build
```

### Tester le build localement

```bash
npm start
```

### Déployer sur Vercel (Gratuit)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI :
   ```bash
   npm i -g vercel
   ```
3. Déployez :
   ```bash
   vercel
   ```
4. Suivez les instructions à l'écran

Votre portfolio sera en ligne en quelques secondes ! 🎉

---

## 🐛 Résolution de Problèmes

### Erreur : "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur : Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001
```

### Images ne s'affichent pas
Vérifiez que les images sont dans `/public/` et que les chemins sont corrects.

### Thème ne change pas
Effacez le cache du navigateur (Ctrl + Shift + Delete).

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js 18+ est installé : `node --version`
2. Vérifiez que npm fonctionne : `npm --version`
3. Consultez la documentation Next.js : https://nextjs.org/docs

---

## ✅ Checklist Avant Déploiement

- [ ] Photo de profil remplacée
- [ ] Tous les liens sociaux mis à jour
- [ ] Projets GitHub ajoutés
- [ ] Informations de contact modifiées
- [ ] Biographie personnalisée
- [ ] Compétences ajustées
- [ ] Testé en mode sombre et clair
- [ ] Testé sur mobile
- [ ] Build de production réussi
- [ ] SEO metadata mis à jour dans `app/layout.tsx`

---

**Bon courage pour votre portfolio ! 🚀**

Si tout est configuré correctement, vous aurez un portfolio qui vaut vraiment 100 000€ ! 💎
