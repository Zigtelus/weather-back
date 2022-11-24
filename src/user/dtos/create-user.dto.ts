import { RolesUserDto } from "./roles-user.dto";
import { CoordsUserDto } from "./coords-user.dto";
import { Prop } from "@nestjs/mongoose";



export class CreateReportDto {

  readonly age: number;
  readonly password: string;
  readonly name: string;

  @Prop({required: true, unique: true})
  readonly email: string;

  readonly coords: CoordsUserDto;
  readonly role: RolesUserDto;
  
}