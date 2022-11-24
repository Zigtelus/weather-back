import { Prop } from "@nestjs/mongoose";
import { CoordsUserDto } from "./coords-user.dto";
import { RolesUserDto } from "./roles-user.dto";



export class UpdateReportDto {

  readonly age: number;
  readonly password: string;
  readonly name: string;

  @Prop({required: true, unique: true})
  readonly email: string;

  readonly coords: CoordsUserDto;
  readonly role: RolesUserDto;
  
}