import './globals.css';

export const metadata = {
  title: 'Mira Screen Admin',
  description: 'Painel de Administração - Mira Screen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}