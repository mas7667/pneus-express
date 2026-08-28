# Pneus Express Manager 🚗

Application de gestion d'inventaire de pneus et de réservation de rendez-vous, développée avec React, TypeScript et Supabase.

## 🚀 Fonctionnalités

- **Gestion d'inventaire** : Ajout, modification, suppression et recherche de pneus
- **Système de réservation** : Prise de rendez-vous avec gestion de capacité (max 3 par créneau)
- **Interface d'administration** : Gestion des rendez-vous pour les employés
- **Base de données Supabase** : Stockage persistant et temps réel

## 📋 Prérequis

- Node.js 20.x ou supérieur
- Un compte Supabase (gratuit)

## ⚙️ Installation

1. **Clonez le projet et installez les dépendances** :

   ```bash
   npm ci
   ```

2. **Configurez Supabase** :

   - Créez un compte sur [supabase.com](https://supabase.com)
   - Créez un nouveau projet
   - Exécutez les scripts SQL dans `SUPABASE_SETUP.md` pour créer les tables
   - Optionnel : Exécutez `supabase-seed.sql` pour des données de test

3. **Configurez les variables d'environnement** :

   ```bash
   cp .env.example .env
   ```

   Puis ajoutez vos clés Supabase dans le fichier `.env` :

   - `VITE_SUPABASE_URL` : URL de votre projet Supabase
   - `VITE_SUPABASE_ANON_KEY` : Clé publique (anon/public)

4. **Lancez l'application** :
   ```bash
   npm run dev
   ```

## 📁 Structure du projet

```
pneus-express/
├── components/          # Composants React réutilisables
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   ├── TireCard.tsx
│   └── TireForm.tsx
├── pages/              # Pages principales
│   ├── About.tsx
│   ├── AdminAppointments.tsx
│   ├── Booking.tsx
│   └── Inventory.tsx
├── services/           # Services et configuration
│   ├── db.ts          # Service de base de données
│   └── supabase.ts    # Client Supabase
├── types.ts           # Types TypeScript
└── App.tsx            # Composant principal

```

## 🗄️ Base de données

Consultez `SUPABASE_SETUP.md` pour la documentation complète de la configuration Supabase.

Tables :

- **tires** : Inventaire des pneus
- **appointments** : Rendez-vous clients

## 🔧 Technologies utilisées

- **React 19.2** avec **TypeScript 5.8**
- **Supabase** pour la base de données
- **React Router 7** pour la navigation
- **Tailwind CSS** pour le style
- **Vite 6.4** comme bundler

## ✅ Vérification

```bash
npm run typecheck
npm run build
npm audit --omit=dev
```

## 📝 Notes

Ce projet a été développé dans le cadre d'un travail académique en Programmation Avancée.
