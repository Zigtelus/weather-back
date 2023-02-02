import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type StatisticsArticleDocument = StatisticsArticle & Document



@Schema({_id: false})
export class StatisticsArticle {

  @Prop({required: true})
  likes: string[];

  @Prop({required: true})
  dislikes: string[];

  @Prop({required: true})
  views: string[];

}


export const StatisticsArticleSchema = SchemaFactory.createForClass(StatisticsArticle);