import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContentService } from '../content/content.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly contentService: ContentService) {}

  @Get('contents')
  getAllContents() {
    return this.contentService.findAll();
  }

  @Post('contents')
  createContent(@Body() body: any) {
    return this.contentService.create(body);
  }

  @Put('contents/:id')
  updateContent(@Param('id') id: string, @Body() body: any) {
    return this.contentService.update(id, body);
  }

  @Delete('contents/:id')
  deleteContent(@Param('id') id: string) {
    return this.contentService.remove(id);
  }

  @Get('stats')
  getStats() {
    const contents = this.contentService.findAll();
    return {
      totalContents: contents.length,
      movies: contents.filter(c => c.type === 'movie').length,
      series: contents.filter(c => c.type === 'series').length,
      avgRating: (contents.reduce((sum, c) => sum + c.rating, 0) / contents.length).toFixed(1),
      activeUsers: 184291,
    };
  }
}