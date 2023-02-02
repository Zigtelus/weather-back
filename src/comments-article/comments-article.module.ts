import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsArticleController } from './comments-article.controller';
import { CommentsArticleRepository } from './comments-article.repository';
import { CommentsArticleService } from './comments-article.service';
import { CommentsArticle, CommentsArticleSchema } from './schema/comments-article.schema';


@Module({
  providers: [
    CommentsArticleService, 
    CommentsArticleRepository
  ],
  controllers: [CommentsArticleController],
  imports: [
    MongooseModule.forFeature([{name: CommentsArticle.name, schema: CommentsArticleSchema }])
  ]
})
export class CommentsModule {}