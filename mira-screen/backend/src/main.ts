import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './database/database.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  
  await app.listen(3000);
  console.log('🚀 Mira Screen Backend running on http://localhost:3000');
  console.log('📦 Database: PostgreSQL connected');
}
bootstrap();