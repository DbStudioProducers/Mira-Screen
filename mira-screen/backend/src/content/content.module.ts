import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { ContentUploadController } from './content-upload.controller';
import { AdminController } from '../admin/admin.controller';

@Module({
  providers: [ContentService],
  controllers: [ContentController, ContentUploadController, AdminController],
})
export class ContentModule {}