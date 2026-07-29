import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { supabaseConfig } from './supabase.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(supabaseConfig),
    TypeOrmModule.forFeature([Content]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}