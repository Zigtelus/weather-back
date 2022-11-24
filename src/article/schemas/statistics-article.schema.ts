import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type StatisticsArticleDocument = StatisticsArticle & Document



@Schema({_id: false})
export class StatisticsArticle {

  @Prop({required: true})
  likes: number;

  @Prop({required: true})
  dislikes: number;

  @Prop({required: true})
  views: number;

}


export const StatisticsArticleSchema = SchemaFactory.createForClass(StatisticsArticle);