// =============================================
// Mira Screen - Supabase Database Connection
// =============================================

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Content } from './content.entity';

export const supabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.SUPABASE_DB_HOST || 'db.xxxxx.supabase.co',
  port: parseInt(process.env.SUPABASE_DB_PORT || '5432'),
  username: process.env.SUPABASE_DB_USER || 'postgres',
  password: process.env.SUPABASE_DB_PASSWORD || '',
  database: process.env.SUPABASE_DB_NAME || 'postgres',
  entities: [Content],
  synchronize: process.env.NODE_ENV !== 'production', // Only true in development
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
  logging: process.env.NODE_ENV === 'development',
};

export default supabaseConfig;