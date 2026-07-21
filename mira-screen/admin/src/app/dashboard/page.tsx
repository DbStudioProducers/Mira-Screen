'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/admin/stats')
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <div className="p-8">Carregando...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-zinc-400">Mira Screen • Administração</p>
        </div>
        <a href="/content" className="bg-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-700">
          Gerenciar Conteúdo
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Total de Conteúdos</div>
          <div className="text-6xl font-bold mt-2">{stats.totalContents}</div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Filmes</div>
          <div className="text-6xl font-bold mt-2 text-blue-400">{stats.movies}</div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Séries</div>
          <div className="text-6xl font-bold mt-2 text-purple-400">{stats.series}</div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Avaliação Média</div>
          <div className="text-6xl font-bold mt-2 text-yellow-400">{stats.avgRating}</div>
        </div>
      </div>

      <div className="mt-10 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h3 className="text-xl font-semibold mb-4">Usuários Ativos</h3>
        <div className="text-5xl font-bold">{stats.activeUsers.toLocaleString()}</div>
        <p className="text-zinc-400 mt-1">Últimas 24 horas</p>
      </div>
    </div>
  );
}