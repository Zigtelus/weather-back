import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RolesUserDto } from '../dtos/roles-user.dto';
import { CoordsUser, CoordsUserSchema } from './coords-user.schema';

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop({required: true, unique: true})
  userId: string;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true})
  age: number;

  @Prop({required: true})
  dateRegistration: string;

  @Prop({required: true})
  lastVisit: string;

  @Prop({required: true, type: CoordsUserSchema })
  coords: CoordsUser;

  @Prop({required: true})
  role: RolesUserDto;

}


export const UserSchema = SchemaFactory.createForClass(User);