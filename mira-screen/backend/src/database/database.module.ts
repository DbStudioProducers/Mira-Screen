import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'mira',
      password: process.env.DB_PASSWORD || 'mira_secure_2026',
      database: process.env.DB_NAME || 'mirascreen',
      entities: [Content],
      synchronize: true, // Use only in development
      logging: false,
    }),
    TypeOrmModule.forFeature([Content]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}