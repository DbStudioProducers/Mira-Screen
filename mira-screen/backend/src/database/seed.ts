import { DataSource } from 'typeorm';
import { Content } from './content.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mira',
  password: 'mira_secure_2026',
  database: 'mirascreen',
  entities: [Content],
  synchronize: true,
});

async function seed() {
  await AppDataSource.initialize();
  const contentRepo = AppDataSource.getRepository(Content);

  console.log('🌱 Seeding database...');

  const contents = [
    {
      title: 'O Último Horizonte',
      type: 'movie',
      description: 'Uma jornada épica através do espaço e tempo.',
      poster_url: 'https://picsum.photos/id/1015/300/450',
      backdrop_url: 'https://picsum.photos/id/1015/1200/630',
      rating: 8.7,
      release_year: 2025,
      duration_minutes: 142,
      genres: ['Ficção Científica', 'Aventura'],
      is_active: true,
    },
    {
      title: 'A Sombra do Passado',
      type: 'series',
      description: 'Um thriller psicológico sobre memória e identidade.',
      poster_url: 'https://picsum.photos/id/1005/300/450',
      backdrop_url: 'https://picsum.photos/id/1005/1200/630',
      rating: 9.1,
      release_year: 2024,
      duration_minutes: 55,
      genres: ['Drama', 'Suspense'],
      is_active: true,
    },
    {
      title: 'Reino Esquecido',
      type: 'series',
      description: 'Uma fantasia épica em um mundo mágico.',
      poster_url: 'https://picsum.photos/id/106/300/450',
      rating: 8.4,
      release_year: 2025,
      duration_minutes: 48,
      genres: ['Fantasia', 'Ação'],
      is_active: true,
    },
    {
      title: 'Noites de Neblina',
      type: 'movie',
      description: 'Um mistério envolvente em uma cidade costeira.',
      poster_url: 'https://picsum.photos/id/1033/300/450',
      rating: 7.9,
      release_year: 2023,
      duration_minutes: 118,
      genres: ['Mistério', 'Thriller'],
      is_active: true,
    },
  ];

  for (const content of contents) {
    const exists = await contentRepo.findOne({ where: { title: content.title } });
    if (!exists) {
      await contentRepo.save(content);
      console.log(`✅ Added: ${content.title}`);
    }
  }

  console.log('🎉 Seed completed!');
  process.exit(0);
}

seed().catch(console.error);