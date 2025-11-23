# Prime Number React App

Une application React permettant de calculer et d’afficher les nombres premiers. Amusé vous à générer aléatoirement des nombres premier ou bien tout simplement entrez un nombre pour voir s'il est premier

## Description

Cette application permet à l’utilisateur de :

* Saisir un nombres et le tester.
* Générer des nombre premier à la suite indéfiniment.
* Générer un nombre premier aléatoire.

L’application est construite avec React et utilise plusieurs stores pour gérer l’état global et local.

## Technologies utilisées

* React (avec Hooks)
* Stores d’état (Zustand)
* Tailwindcss et shadcn/ui pour l’UI
* Vite comme outil de build

## Installation et lancement

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/Nabibouch/prime_number_react.git
   ```

2. Se rendre dans le dossier `client` :

   ```bash
   cd prime_number_react/client
   ```

3. Installer les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Lancer l’application en mode développement :

   ```bash
   npm run dev
   # ou
   yarn run dev
   ```

   L’application sera accessible par défaut à : `http://localhost:5173`


## Structure du projet

```
client/
  ├── public/
  ├── src/
      ├── api/               ← api simulé
      ├── components/        ← Composants React
      ├── hooks/             ← Ensemble des hooks utilisé
      ├── stores/            ← Stores pour gérer l’état
      ├── routes/            ← Ensemble des routes utilisé
      ├── Views/             ← Ensemble des pages utilisé
      └── index.jsx          ← Point d’entrée de l’application
  ├── package.json
  └── README.md
```


### Participants 

Nabil Lmrabet
Ilyas Elazzouzi



