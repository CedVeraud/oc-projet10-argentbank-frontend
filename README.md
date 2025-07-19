# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Structure du projet Argent Bank

## Version 1.0 - language : french

Ce projet React suit une architecture modulaire, basée sur les responsabilités des composants.

## 🔧 Racine src/

- `main.jsx` : point d'entrée de l'application, initialisation de React.
- `App.jsx` : composant racine contenant le routeur et le layout général.

## 🖼️ assets/

Ressources statiques :

- `favicon/` : icônes navigateur
- `img/` : visuels du site
- `style/` : fichiers SCSS globaux (ex: variables)

## 🧩 components/

Composants réutilisables organisés par rôle :

- `features/` : présentation des fonctionnalités (données mockées)
- `forms/` : formulaires utilisateurs (`signin`, `user`)
- `guards/` : `PrivateRoute` protège les routes privées
- `hero/` : bloc visuel d’introduction
- `layout/` : header et footer
- `navbar/` : barre de navigation principale
- `transactions/` : composants d’affichage des transactions

Chaque composant dispose de son fichier `.module.scss` pour un style localisé.

## 📄 pages/

Pages principales de l’application, liées aux routes :

- `/home` : page d’accueil
- `/login` : page de connexion
- `/user` : tableau de bord utilisateur
- `/error` : page 404

## 🧪 data/

Fichiers JSON simulant des données pour le développement.

## 🧠 store/

Logique Redux :

- `apiFetch.js` : fonction centralisée pour les appels `fetch`
- `store.js` : configuration du store Redux
- `auth/` : slice et actions liées à l’authentification

---

## ✅ Conventions

- Tous les fichiers React utilisent l’extension `.jsx` si du JSX est présent.
- Les styles sont scindés et locaux par module (`.module.scss`).
- Découpage par fonctionnalité pour plus de lisibilité et d’évolutivité.

## Schéma de l’architecture

```bash
src/
├── main.jsx           # Point d'entrée React
├── App.jsx            # Composant racine avec routing/layout
│
├── assets/            # Ressources statiques
│   ├── favicon/
│   ├── img/
│   └── style/         # SCSS globaux (variables, mixins)
│
├── components/        # Composants modulaires
│   ├── features/      # Blocs de la landing page (données mockées)
│   ├── forms/         # Formulaires (login, user)
│   ├── guards/        # Route protégée (PrivateRoute)
│   ├── hero/          # Section d’intro visuelle
│   ├── layout/        # Header et Footer
│   ├── navbar/        # Barre de navigation
│   └── transactions/  # Liste des transactions (données mockées)
│
├── pages/             # Pages liées aux routes
│   ├── home/
│   ├── login/
│   ├── user/
│   └── error/         # Page 404
│
├── data/              # Données mock (JSON)
│
└── store/             # Logique Redux
    ├── apiFetch.js    # Appels API centralisés
    ├── store.js       # Configuration Redux
    └── auth/          # Auth slice & actions
```
