import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type UserDocument = RoleUser & Document



@Schema({_id: false})
class RoleUser {

  @Prop({required: true})
  readonly admin: string;
  
  @Prop({required: true})
  readonly user: string;

}


export const RoleUserSchema = SchemaFactory.createForClass(RoleUser);