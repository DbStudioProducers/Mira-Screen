import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  private contents = [
    {
      id: '1',
      title: 'O Último Horizonte',
      type: 'movie',
      poster_url: 'https://picsum.photos/id/1015/300/450',
      rating: 8.7,
    },
    {
      id: '2',
      title: 'A Sombra do Passado',
      type: 'series',
      poster_url: 'https://picsum.photos/id/1005/300/450',
      rating: 9.1,
    },
  ];

  findAll() {
    return this.contents;
  }

  findOne(id: string) {
    return this.contents.find((c) => c.id === id);
  }

  getTrending() {
    return this.contents;
  }
}