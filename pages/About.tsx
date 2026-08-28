import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="border-b border-slate-100 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">À propos de Pneus Express</h1>
          <p className="text-slate-500">Application de gestion d’inventaire et de rendez-vous pour un commerce de pneus.</p>
        </div>

        {/* Partie 2: Environnement de développement */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">Informations du projet</h2>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold w-32 inline-block">Application:</span> Pneus Express Manager</p>
              <p><span className="font-semibold w-32 inline-block">Version:</span> 1.0.0</p>
              <p><span className="font-semibold w-32 inline-block">Développeur:</span> Fily Sara Keita</p>
              <p><span className="font-semibold w-32 inline-block">Contexte:</span> Projet académique</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">Environnement technique</h2>
            <ul className="list-disc list-inside space-y-1 text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <li>React 19.2</li>
              <li>TypeScript 5.8</li>
              <li>Vite 6.4</li>
              <li>React Router DOM 7</li>
              <li>Supabase 2</li>
              <li>Vercel (Plateforme de déploiement)</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <h3 className="font-bold text-orange-800 mb-1">Fonctions principales</h3>
            <p className="text-orange-900">Inventaire, recherche, gestion des stocks, réservation avec capacité par créneau et administration des rendez-vous.</p>
          </div>
        </section>
      </div>

    </div>
  );
};
