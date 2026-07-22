import { Controller, Get, Param } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('contents')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(id);
  }

  @Get('trending')
  getTrending() {
    return this.contentService.getTrending();
  }
}