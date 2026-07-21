import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { ContentUploadController } from './content-upload.controller';

@Module({
  providers: [ContentService],
  controllers: [ContentController, ContentUploadController],
})
export class ContentModule {}