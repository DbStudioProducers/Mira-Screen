import { Resolver, Query, Args } from '@nestjs/graphql';
import { ContentService } from './content.service';

@Resolver('Content')
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Query(() => [ContentType])
  contents() {
    return this.contentService.findAll();
  }

  @Query(() => ContentType)
  content(@Args('id') id: string) {
    return this.contentService.findOne(id);
  }
}

// Simple GraphQL Type
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class ContentType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  type: string;

  @Field()
  poster_url: string;

  @Field()
  rating: number;
}