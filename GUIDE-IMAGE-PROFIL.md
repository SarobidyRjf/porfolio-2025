# 📸 Guide : Comment changer votre image de profil

## 🎯 Emplacement de l'image actuelle

Votre image de profil est actuellement située dans :
```
e:\porfolio\premium-portfolio\public\luffy.png
```

## 🔄 Comment remplacer l'image

### Méthode 1 : Remplacement simple (Recommandé)

1. **Préparez votre photo** :
   - Format recommandé : **JPG** ou **PNG**
   - Taille recommandée : **500x500 pixels minimum** (carré)
   - Poids : moins de 500 KB pour de meilleures performances

2. **Renommez votre photo** :
   - Renommez votre photo en `luffy.png` ou `luffy.jpg`

3. **Remplacez le fichier** :
   - Allez dans le dossier : `e:\porfolio\premium-portfolio\public\`
   - Supprimez l'ancien fichier `luffy.png`
   - Copiez votre nouvelle photo `luffy.png` dans ce dossier

4. **C'est terminé !** 🎉
   - L'image sera automatiquement mise à jour partout dans le site

### Méthode 2 : Utiliser un nom différent

Si vous voulez garder un nom différent pour votre photo (ex: `mon-profil.jpg`) :

1. **Placez votre photo** dans le dossier `public/`

2. **Modifiez les fichiers suivants** :

   **Fichier 1 : `components/sections/Hero.tsx`** (ligne 141)
   ```tsx
   <Image
     src="/mon-profil.jpg"  // ← Changez ici
     alt="Profile"
     fill
     className="object-cover object-center"
     priority
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   />
   ```

   **Fichier 2 : `components/Navigation.tsx`** (ligne 79)
   ```tsx
   <Image
     src="/mon-profil.jpg"  // ← Changez ici
     alt="Profile"
     fill
     className="object-cover object-center"
     priority
     sizes="36px"
   />
   ```

## 📐 Adaptation automatique de l'image

Votre image s'adapte automatiquement grâce aux propriétés suivantes :

### ✅ Propriétés d'adaptation configurées :

1. **`fill`** : L'image remplit tout le conteneur
2. **`object-cover`** : L'image couvre tout l'espace sans déformation
3. **`object-center`** : L'image est centrée dans le conteneur
4. **`sizes`** : Optimisation pour différentes tailles d'écran

### 📱 Affichage selon les écrans :

- **Mobile/Tablette** : 36x36 pixels (dans la navigation)
- **Desktop** : Grande image ronde dans la section Hero
- **Tous les écrans** : L'image reste toujours bien cadrée et centrée

## 🎨 Conseils pour une belle photo de profil

1. **Format carré** : Utilisez une photo carrée (1:1) pour éviter les recadrages
2. **Visage centré** : Assurez-vous que votre visage est au centre
3. **Fond uni** : Un fond simple met mieux en valeur votre visage
4. **Bonne luminosité** : Évitez les photos trop sombres ou surexposées
5. **Haute qualité** : Utilisez une photo nette et de bonne résolution

## 🔧 Fichiers modifiés

Les fichiers suivants utilisent votre image de profil :

1. **`components/sections/Hero.tsx`** (ligne 141)
   - Grande image ronde dans la section d'accueil
   - Visible uniquement sur desktop (md:block)

2. **`components/Navigation.tsx`** (ligne 79)
   - Petite image dans la barre de navigation
   - Visible uniquement sur mobile/tablette (md:hidden)

## ❓ Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez que le nom du fichier est correct
2. Vérifiez que l'image est bien dans le dossier `public/`
3. Redémarrez le serveur de développement (`npm run dev`)
4. Videz le cache de votre navigateur (Ctrl + F5)

---

**Note** : L'image actuelle (luffy.png) est une image temporaire. Remplacez-la par votre vraie photo professionnelle pour personnaliser votre portfolio ! 🚀
