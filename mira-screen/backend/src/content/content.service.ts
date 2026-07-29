import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../database/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  async findAll(): Promise<Content[]> {
    return this.contentRepository.find({
      where: { is_active: true },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Content | null> {
    return this.contentRepository.findOne({ where: { id } });
  }

  async getTrending(): Promise<Content[]> {
    return this.contentRepository.find({
      where: { is_active: true },
      order: { rating: 'DESC' },
      take: 10,
    });
  }

  async create(data: Partial<Content>): Promise<Content> {
    const content = this.contentRepository.create(data);
    return this.contentRepository.save(content);
  }

  async update(id: string, data: Partial<Content>): Promise<Content | null> {
    await this.contentRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contentRepository.update(id, { is_active: false });
  }
}