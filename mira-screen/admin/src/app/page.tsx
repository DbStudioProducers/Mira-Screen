'use client';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800 bg-zinc-900 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold tracking-tighter">MIRA</div>
            <div className="text-red-600 font-semibold">SCREEN</div>
          </div>
          <div>Admin • João Silva</div>
        </div>
      </nav>

      <div className="p-8">
        <h1 className="text-4xl font-semibold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-zinc-400">Usuários Ativos</div>
            <div className="text-5xl font-bold mt-2">184,291</div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-zinc-400">Conteúdos Publicados</div>
            <div className="text-5xl font-bold mt-2">3,842</div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-zinc-400">Horas Assistidas (24h)</div>
            <div className="text-5xl font-bold mt-2">1.2M</div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Ações Rápidas</h2>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-red-600 rounded-lg font-medium hover:bg-red-700">
              + Novo Conteúdo
            </button>
            <button className="px-6 py-3 bg-zinc-800 rounded-lg font-medium hover:bg-zinc-700">
              Gerenciar Usuários
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}