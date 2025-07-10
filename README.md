# **Guide de Déploiement sur Debian 12**

Ce guide détaille les étapes pour déployer l'application **Zynlix** sur un serveur Debian 12 en utilisant Node.js et PM2.

## **Prérequis**

Avant de commencer, assurez-vous de disposer des éléments suivants :
*   Un serveur Debian 12 avec accès `sudo`.
*   Une URL de connexion à votre base de données PostgreSQL (par exemple, depuis NeonDB).
*   Accès SSH au serveur avec clés SSH (recommandé).

---

## **Étape 1 : Préparation du Serveur**

Connectez-vous à votre serveur en SSH et exécutez les commandes suivantes.

1.  **Mettre à jour le système :**
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```

2.  **Installer les dépendances de base :**
    ```bash
    sudo apt install -y git curl build-essential ufw
    ```

3.  **Créer un utilisateur dédié pour l'application :**
    ```bash
    sudo adduser --system --group --home /home/zynlix zynlix
    sudo usermod -s /bin/bash zynlix
    ```

4.  **Installer Node.js v20.x :**
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
    ```

5.  **Vérifier l'installation de Node.js :**
    ```bash
    node --version  # Doit afficher v20.x.x
    npm --version   # Doit afficher 10.x.x ou plus
    ```

6.  **Installer le gestionnaire de processus PM2 globalement :**
    ```bash
    sudo npm install -g pm2
    ```

---

## **Étape 2 : Configuration du Pare-feu**

1.  **Configurer UFW (Uncomplicated Firewall) :**
    ```bash
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    sudo ufw allow ssh
    sudo ufw allow 3000/tcp
    sudo ufw --force enable
    ```

2.  **Vérifier le statut du pare-feu :**
    ```bash
    sudo ufw status
    ```

---

## **Étape 3 : Déploiement de l'Application**

1.  **Passer à l'utilisateur dédié et naviguer vers le répertoire home :**
    ```bash
    sudo su - zynlix
    cd /home/zynlix
    ```

2.  **Cloner le projet depuis GitHub :**
    ```bash
    git clone https://github.com/Djimmy2x/zynlix.fr.git zynlix
    ```
    
    **Note :** Si vous avez besoin d'authentification, utilisez votre token GitHub :
    ```bash
    git clone https://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@github.com/Djimmy2x/zynlix.fr.git zynlix
    ```

3.  **Installer les dépendances du projet :**
    ```bash
    cd zynlix/
    
    # Installer toutes les dépendances (production + développement)
    npm ci
    
    # Vérifier que bcrypt est installé
    npm list bcrypt
    
    # Si bcrypt n'est pas installé, l'installer manuellement
    npm install bcrypt
    
    # Installer toutes les dépendances manquantes
    npm install dotenv express cors helmet express-rate-limit
    
    # Recompiler avec la nouvelle configuration esbuild
    npm run build
    ```
    ```

4.  **Configurer les variables d'environnement :**
    Créez un fichier `.env` à la racine du projet.
    ```bash
    nano .env
    ```
    Ajoutez les variables nécessaires :
    ```ini
    # Base de données
    DATABASE_URL="VOTRE_URL_DE_BASE_DE_DONNEES_POSTGRESQL"
    
    # Configuration de l'application
    NODE_ENV=production
    PORT=3000
    HOST=0.0.0.0
    
    # Sécurité (générez des clés sécurisées)
    JWT_SECRET="votre_jwt_secret_tres_securise"
    SESSION_SECRET="votre_session_secret_tres_securise"
    
    # Authentification Admin
    ADMIN_USERNAME="admin"
    ADMIN_PASSWORD="votre_mot_de_passe_admin_securise"
    ```
    
    **Sécuriser le fichier :**
    ```bash
    chmod 600 .env
    ```

5.  **Compiler l'application pour la production :**
    ```bash
    npm run build
    ```
    
    **Note :** Cette commande compile à la fois le frontend (Vite) et le backend (esbuild).

6.  **Vérifier que le fichier de sortie existe :**
    ```bash
    ls -la dist/index.js
    ```

---

## **Étape 4 : Lancement avec PM2**

1.  **Créer un fichier de configuration PM2 :**
    ```bash
    nano ecosystem.config.js
    ```
    
    Contenu du fichier :
    ```javascript
    export default {
      apps: [{
        name: 'zynlix-app',
        script: './dist/index.js',
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
    
    **Important :** Si PM2 donne l'erreur "No script path", utilisez cette commande alternative :
    ```bash
    pm2 start ./dist/index.js --name zynlix-app
    ```

2.  **Créer le dossier des logs :**
    ```bash
    mkdir -p logs
    ```

3.  **Lancer l'application avec PM2 :**
    ```bash
    pm2 start ecosystem.config.js
    ```

4.  **Revenir à l'utilisateur root pour configurer PM2 au démarrage :**
    ```bash
    exit  # Retour à l'utilisateur root
    sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u zynlix --hp /home/zynlix
    ```

5.  **Sauvegarder la configuration PM2 :**
    ```bash
    sudo su - zynlix
    pm2 save
    exit
    ```

---

## **Étape 5 : Vérifications et Tests**

1.  **Vérifier le statut de PM2 :**
    ```bash
    sudo su - zynlix -c "pm2 status"
    ```
    
    **Nettoyer les anciennes instances :**
    ```bash
    pm2 delete all
    pm2 start ecosystem.config.js
    ```

2.  **Vérifier que l'application écoute sur le bon port :**
    ```bash
    sudo netstat -tlnp | grep :3000
    # Ou avec ss (plus moderne) :
    sudo ss -tlnp | grep :3000
    ```

3.  **Tester l'application localement :**
    ```bash
    curl http://localhost:3000
    ```

4.  **Vérifier les logs en cas de problème :**
    ```bash
    sudo su - zynlix -c "pm2 logs zynlix-app"
    ```
    
    **Diagnostic complet :**
    ```bash
    # Vérifier le statut PM2
    pm2 status
    
    # Voir les logs détaillés
    pm2 logs zynlix-app --lines 50
    
    # Vérifier si le port est utilisé
    sudo netstat -tlnp | grep :3000
    
    # Tester le processus directement
    node dist/index.js
    
    # Vérifier les variables d'environnement
    cat .env
    
    # Vérifier si l'application écoute
    sudo lsof -i :3000
    ```

5.  **Tester depuis l'extérieur :**
    Accédez à `http://<IP_DU_SERVEUR>:3000` depuis votre navigateur.

---

## **Gestion des Logs**

1.  **Consulter les logs PM2 :**
    ```bash
    sudo su - zynlix -c "pm2 logs"
    ```

2.  **Consulter les logs système :**
    ```bash
    sudo journalctl -u pm2-zynlix -f
    ```

3.  **Rotation des logs (optionnel) :**
    ```bash
    sudo su - zynlix -c "pm2 install pm2-logrotate"
    ```

---

## **Maintenance et Mises à Jour**

1.  **Connexion et navigation :**
    ```bash
    sudo su - zynlix
    cd /home/zynlix
    ```

2.  **Mettre à jour le code :**
    ```bash
    git pull origin main
    ```
    
    **Note :** Si vous avez besoin d'authentification pour les pulls :
    ```bash
    git pull https://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@github.com/Djimmy2x/zynlix.fr.git main
    ```

3.  **Installer les nouvelles dépendances :**
    ```bash
    npm ci
    ```

4.  **Recompiler l'application :**
    ```bash
    npm run build
    ```

5.  **Redémarrer l'application :**
    ```bash
    pm2 restart zynlix-app
    ```

6.  **Vérifier le statut :**
    ```bash
    pm2 status
    pm2 logs zynlix-app --lines 20
    ```

---

## **Dépannage**

### **Problèmes courants :**

1.  **Port déjà utilisé :**
    ```bash
    sudo netstat -tlnp | grep :3000
    sudo kill -9 <PID>
    ```

2.  **Permissions de fichiers :**
    ```bash
    sudo chown -R zynlix:zynlix /home/zynlix
    sudo chmod -R 755 /home/zynlix
    sudo chmod 600 /home/zynlix/.env
    ```

3.  **Base de données inaccessible :**
    ```bash
    # Tester la connexion
    sudo su - zynlix -c "node -e \"console.log(process.env.DATABASE_URL)\""
    ```

4.  **Redémarrage complet :**
    ```bash
    sudo su - zynlix -c "pm2 delete all"
    sudo su - zynlix -c "pm2 start ecosystem.config.js"
    ```

---

## **Sécurité Supplémentaire**

1.  **Mise à jour automatique du système :**
    ```bash
    sudo apt install unattended-upgrades
    sudo dpkg-reconfigure -plow unattended-upgrades
    ```

2.  **Monitoring des tentatives de connexion :**
    ```bash
    sudo apt install fail2ban
    sudo systemctl enable fail2ban
    sudo systemctl start fail2ban
    ```

---

## **Optimisations de Performance**

### **Front-End**
- **Lazy Loading** : Composants non critiques chargés à la demande
- **Images optimisées** : Format WebP, compression automatique, lazy loading
- **Code splitting** : React.lazy() pour réduire le bundle initial
- **Intersection Observer** : Chargement intelligent des ressources

### **Architecture**
- **ServicePageLayout** : Composant générique pour tous les services (principe DRY)
- **OptimizedImage** : Composant d'image avec lazy loading et optimisation
- **Fallbacks élégants** : Placeholders animés pendant le chargement

---

**Note :** Ce guide assume que vous n'utilisez pas de reverse proxy (nginx) et que l'application est directement accessible sur le port 3000. Pour un environnement de production, il est recommandé d'ajouter un reverse proxy avec SSL/TLS.

# zynlix.fr