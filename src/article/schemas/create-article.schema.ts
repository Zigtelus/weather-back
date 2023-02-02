import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'
import { DateLastEditArticleDto } from '../dtos/date-last-edit-article.dto';


export type CreateArticleDocument = CreateArticle & Document


@Schema()
export class CreateArticle {

  @Prop({required: true})
  readonly articleId: string;

  @Prop({required: true})
  readonly auter: string;

  @Prop({required: true})
  readonly auterId: string;

  @Prop({required: true})
  readonly title: string;
  
  @Prop({required: true})
  readonly article: string;
  
  @Prop({required: true})
  readonly description: string;
  
  @Prop({required: true})
  readonly cover: string;

  @Prop({required: true})
  readonly datePublication: string;

  @Prop({required: true})
  readonly dateLastEdit: DateLastEditArticleDto;
  
  @Prop({required: true})
  readonly statistics: null;

  @Prop({required: true})
  readonly comments: null;

}




export const CreateArticleSchema = SchemaFactory.createForClass(CreateArticle);