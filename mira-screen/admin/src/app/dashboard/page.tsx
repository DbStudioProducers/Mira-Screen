'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from '@/lib/supabase-auth';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  if (!user) return <div className="p-8 text-white">Carregando...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-zinc-400">Bem-vindo, {user.email}</p>
        </div>
        <div className="flex gap-4">
          <a href="/content" className="bg-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-700">
            Gerenciar Conteúdo
          </a>
          <button 
            onClick={handleLogout}
            className="bg-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-700"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Conteúdo do Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Total de Conteúdos</div>
          <div className="text-6xl font-bold mt-2">184</div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Usuários Ativos</div>
          <div className="text-6xl font-bold mt-2">12.4k</div>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <div className="text-sm text-zinc-400">Horas Assistidas</div>
          <div className="text-6xl font-bold mt-2">892k</div>
        </div>
      </div>
    </div>
  );
}