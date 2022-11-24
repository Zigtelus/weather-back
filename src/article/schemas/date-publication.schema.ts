import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type StatisticsArticleDocument = StatisticsArticle & Document



@Schema({_id: false})
export class StatisticsArticle {

  @Prop({required: true})
  place: number;

  @Prop({required: true})
  data: string;

}


export const StatisticsArticleSchema = SchemaFactory.createForClass(StatisticsArticle);