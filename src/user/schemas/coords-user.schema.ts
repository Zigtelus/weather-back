import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type UserDocument = CoordsUser & Document



@Schema({_id: false})
export class CoordsUser {

  @Prop({required: true})
  latitude: number;

  @Prop({required: true})
  longitude: number;

  @Prop({required: true})
  city: string;

}


export const CoordsUserSchema = SchemaFactory.createForClass(CoordsUser);