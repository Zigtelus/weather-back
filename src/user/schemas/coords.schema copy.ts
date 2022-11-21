import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type UserDocument = Role & Document



@Schema({_id: false})
export class Role {

  @Prop({required: true})
  readonly admin: string;
  
  @Prop({required: true})
  readonly user: string;

}


export const RoleSchema = SchemaFactory.createForClass(Role);