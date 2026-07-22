import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { ContentUploadController } from './content-upload.controller';
import { AdminController } from '../admin/admin.controller';
import { Content } from '../database/content.entity';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Content])],
  providers: [ContentService],
  controllers: [ContentController, ContentUploadController, AdminController],
})
export class ContentModule {}