# **Zynlix - Site Vitrine**

Site vitrine statique pour Zynlix, entreprise d'infogérance informatique.

## **Technologies**

- **React 18** - Interface utilisateur
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles et design
- **Vite** - Build tool et serveur de développement
- **Wouter** - Routing léger

## **Installation**

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/Djimmy2x/zynlix.fr.git zynlix
   cd zynlix
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer en développement :**
   ```bash
   npm run dev
   ```

4. **Compiler pour la production :**
   ```bash
   npm run build
   ```

5. **Prévisualiser la production :**
   ```bash
   npm run preview
   ```

## **Déploiement**

### **Déploiement simple sur serveur**

1. **Compiler le projet :**
   ```bash
   npm run build
   ```

2. **Servir les fichiers statiques :**
   ```bash
   # Avec nginx
   sudo apt install nginx
   sudo cp -r dist/* /var/www/html/
   
   # Ou avec un serveur simple
   npx serve dist
   ```

### **Déploiement avec PM2**

1. **Installer PM2 :**
   ```bash
   npm install -g pm2
   ```

2. **Créer ecosystem.config.js :**
   ```javascript
   export default {
     apps: [{
       name: 'zynlix-static',
       script: 'npx',
       args: 'serve dist -p 3000',
       cwd: '/home/zynlix/zynlix',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

3. **Lancer avec PM2 :**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

## **Structure du projet**

```
zynlix/
├── client/
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/         # Pages de l'application
│   │   └── main.tsx       # Point d'entrée
│   └── index.html
├── dist/                  # Fichiers compilés
├── package.json
└── README.md
```

## **Fonctionnalités**

- ✅ **Design moderne** - Interface professionnelle et responsive
- ✅ **Performance optimisée** - Chargement rapide et optimisations
- ✅ **SEO friendly** - Métadonnées et structure sémantique
- ✅ **Accessibilité** - Standards WCAG respectés
- ✅ **Maintenance simple** - Code propre et documenté

---

**Zynlix** - Votre partenaire informatique de confiance