import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CoordsUserDto } from '../dtos/coords-user.dto';
import { RolesUserDto } from '../dtos/roles-user.dto';
import { CoordsSchema } from './coords.schema';

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop({required: true})
  userId: string;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  age: number;

  @Prop({required: true})
  dateRegistration: string;

  @Prop({required: true, type: CoordsSchema })
  coords: CoordsUserDto;

  @Prop({required: true})
  role: RolesUserDto;

}


export const UserSchema = SchemaFactory.createForClass(User);