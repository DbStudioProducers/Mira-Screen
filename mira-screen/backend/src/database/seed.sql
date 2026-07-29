-- =============================================
-- Mira Screen - Seed Data for Supabase
-- =============================================

-- Limpar tabela (cuidado em produção)
-- TRUNCATE TABLE contents RESTART IDENTITY;

INSERT INTO contents (title, type, description, poster_url, backdrop_url, rating, release_year, duration_minutes, genres, is_active)
VALUES 
(
  'O Último Horizonte',
  'movie',
  'Uma jornada épica através do espaço e tempo.',
  'https://picsum.photos/id/1015/300/450',
  'https://picsum.photos/id/1015/1200/630',
  8.7,
  2025,
  142,
  ARRAY['Ficção Científica', 'Aventura'],
  true
),
(
  'A Sombra do Passado',
  'series',
  'Um thriller psicológico sobre memória e identidade.',
  'https://picsum.photos/id/1005/300/450',
  'https://picsum.photos/id/1005/1200/630',
  9.1,
  2024,
  55,
  ARRAY['Drama', 'Suspense'],
  true
),
(
  'Reino Esquecido',
  'series',
  'Uma fantasia épica em um mundo mágico.',
  'https://picsum.photos/id/106/300/450',
  NULL,
  8.4,
  2025,
  48,
  ARRAY['Fantasia', 'Ação'],
  true
),
(
  'Noites de Neblina',
  'movie',
  'Um mistério envolvente em uma cidade costeira.',
  'https://picsum.photos/id/1033/300/450',
  NULL,
  7.9,
  2023,
  118,
  ARRAY['Mistério', 'Thriller'],
  true
),
(
  'O Código do Silêncio',
  'movie',
  'Um agente especial descobre uma conspiração global.',
  'https://picsum.photos/id/201/300/450',
  NULL,
  8.2,
  2024,
  135,
  ARRAY['Ação', 'Suspense'],
  true
);

-- Verificar dados inseridos
SELECT id, title, type, rating FROM contents ORDER BY created_at DESC;