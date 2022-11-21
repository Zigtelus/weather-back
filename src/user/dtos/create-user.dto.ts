import { RolesUserDto } from "./roles-user.dto";
import {CoordsUserDto } from "./coords-user.dto";



export class CreateReportDto {

  readonly age: number;
  readonly name: string;
  readonly email: string;
  readonly coords: CoordsUserDto;
  readonly role: RolesUserDto;
  
}