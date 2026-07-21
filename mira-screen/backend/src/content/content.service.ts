import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  private contents = [
    {
      id: '1',
      title: 'O Último Horizonte',
      type: 'movie',
      poster_url: 'https://picsum.photos/id/1015/300/450',
      backdrop_url: 'https://picsum.photos/id/1015/1200/630',
      rating: 8.7,
      release_year: 2025,
      description: 'Uma jornada épica através do espaço e tempo.',
      duration_minutes: 142,
      genres: ['Ficção Científica', 'Aventura'],
    },
    {
      id: '2',
      title: 'A Sombra do Passado',
      type: 'series',
      poster_url: 'https://picsum.photos/id/1005/300/450',
      backdrop_url: 'https://picsum.photos/id/1005/1200/630',
      rating: 9.1,
      release_year: 2024,
      description: 'Um thriller psicológico sobre memória e identidade.',
      duration_minutes: 55,
      genres: ['Drama', 'Suspense'],
    },
    {
      id: '3',
      title: 'Noites de Neblina',
      type: 'movie',
      poster_url: 'https://picsum.photos/id/1033/300/450',
      rating: 7.9,
      release_year: 2023,
      description: 'Um mistério envolvente em uma cidade costeira.',
      duration_minutes: 118,
      genres: ['Mistério', 'Thriller'],
    },
    {
      id: '4',
      title: 'Reino Esquecido',
      type: 'series',
      poster_url: 'https://picsum.photos/id/106/300/450',
      rating: 8.4,
      release_year: 2025,
      description: 'Uma fantasia épica em um mundo mágico.',
      duration_minutes: 48,
      genres: ['Fantasia', 'Ação'],
    },
  ];

  findAll() {
    return this.contents;
  }

  findOne(id: string) {
    return this.contents.find((c) => c.id === id);
  }

  getTrending() {
    return this.contents.sort((a, b) => b.rating - a.rating);
  }

  create(content: any) {
    const newContent = {
      id: Date.now().toString(),
      ...content,
    };
    this.contents.push(newContent);
    return newContent;
  }

  update(id: string, data: any) {
    const index = this.contents.findIndex((c) => c.id === id);
    if (index === -1) return null;
    this.contents[index] = { ...this.contents[index], ...data };
    return this.contents[index];
  }

  remove(id: string) {
    this.contents = this.contents.filter((c) => c.id !== id);
    return { deleted: true };
  }
}