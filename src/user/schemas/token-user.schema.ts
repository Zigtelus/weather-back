import { Prop, Schema } from "@nestjs/mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop()
  refreshToken: string;
  
}