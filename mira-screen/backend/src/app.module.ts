import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [AuthModule, ContentModule, GraphqlModule],
})
export class AppModule {}