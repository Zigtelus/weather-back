import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'
import { DateLastEditCommentDto } from '../dto/date-last-edit-comment.dto';


export type CommentArticleDocument = CommentArticle & Document


@Schema()
export class CommentArticle {


  @Prop({required: true})
  readonly commentId: string;

  @Prop({required: true})
  readonly auterId: string;

  @Prop({required: true})
  readonly name: string;

  @Prop({required: true})
  readonly family: string;

  @Prop({required: true})
  readonly text: string;

  @Prop({required: true})
  readonly likes: string[];

  @Prop({required: true})
  readonly dislikes: string[];
  
  @Prop({required: true})
  readonly dateCreation: string;
  
  @Prop({required: true})
  readonly dateLastEdit: DateLastEditCommentDto;


}


export const CommentArticleSchema = SchemaFactory.createForClass(CommentArticle);