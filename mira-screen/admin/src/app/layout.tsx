import './globals.css';

export const metadata = {
  title: 'Mira Screen Admin',
  description: 'Painel Administrativo - Mira Screen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold tracking-tighter">MIRA</span>
            <span className="text-red-600 font-semibold">SCREEN</span>
            <span className="text-xs bg-red-600 px-2 py-0.5 rounded ml-2">ADMIN</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/dashboard" className="hover:text-red-400">Dashboard</a>
            <a href="/content" className="hover:text-red-400">Conteúdo</a>
            <a href="/" className="hover:text-red-400">Sair</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}