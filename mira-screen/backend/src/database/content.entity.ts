import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: string; // movie | series

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  poster_url: string;

  @Column({ nullable: true })
  backdrop_url: string;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ nullable: true })
  release_year: number;

  @Column({ nullable: true })
  duration_minutes: number;

  @Column({ type: 'simple-array', nullable: true })
  genres: string[];

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}