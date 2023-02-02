import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'


export type FileThisDocument = FileThis & Document


@Schema()
export class FileThis {

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  type: string;

  @Prop({required: true})
  accessLink: string;

  @Prop({default: 0})
  size: Number;

  @Prop({default: ''})
  path: string;

  @Prop({default: Date.now()})
  date: Date;

}




export const FileThisSchema = SchemaFactory.createForClass(FileThis);