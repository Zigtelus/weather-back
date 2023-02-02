import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'
import { CommentArticle, CommentArticleSchema } from './comment-article.schema';


export type CommentsArticleDocument = CommentsArticle & Document


@Schema()
export class CommentsArticle {

  @Prop({required: true})
  articleId: string;

  @Prop({required: true})
  commentsId: string;

  @Prop({required: true, type: [CommentArticleSchema]})
  comments: CommentArticle[];


}


export const CommentsArticleSchema = SchemaFactory.createForClass(CommentsArticle);