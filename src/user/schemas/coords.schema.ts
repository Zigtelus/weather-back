import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type UserDocument = Coords & Document



@Schema({_id: false})
export class Coords {

  @Prop({required: true})
  latitude: number;

  @Prop({required: true})
  longitude: number;

  @Prop({required: true})
  city: string;

}


export const CoordsSchema = SchemaFactory.createForClass(Coords);