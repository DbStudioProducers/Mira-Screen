// Mira Screen - Seed Script
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://mira:mira_secure_2026@localhost:5432/mirascreen'
});

async function seed() {
  console.log('🌱 Seeding Mira Screen database...');

  // Users
  await pool.query(`
    INSERT INTO users (email, password_hash, full_name, subscription_plan)
    VALUES 
    ('admin@mirascreen.com', '$2b$12$examplehash', 'Admin Mira', 'premium'),
    ('user@example.com', '$2b$12$examplehash', 'João Silva', 'premium')
    ON CONFLICT (email) DO NOTHING;
  `);

  // Content
  await pool.query(`
    INSERT INTO contents (title, type, release_year, rating, poster_url)
    VALUES 
    ('O Último Horizonte', 'movie', 2025, 8.7, 'https://picsum.photos/id/1015/300/450'),
    ('A Sombra do Passado', 'series', 2024, 9.1, 'https://picsum.photos/id/1005/300/450'),
    ('Noites de Neblina', 'movie', 2023, 7.9, 'https://picsum.photos/id/1033/300/450')
    ON CONFLICT DO NOTHING;
  `);

  console.log('✅ Seed completed successfully!');
  process.exit(0);
}

seed().catch(console.error);