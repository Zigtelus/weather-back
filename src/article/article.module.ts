import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleRepository } from './article.repository';
import { MulterModule } from '@nestjs/platform-express';
import { Article, ArticleSchema } from './schemas/article.schema';




@Module({
  providers: [
    ArticleService, 
    ArticleRepository
  ],
  controllers: [ArticleController],
  imports: [
    MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema }]),
    MulterModule.register({
      dest: './uploads',
    })
  ]
})

export class ArticleModule {}
