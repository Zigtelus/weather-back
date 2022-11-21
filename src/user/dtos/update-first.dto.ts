import { RolesUserDto } from "./roles-user.dto";



export class UpdateReportDto {

  readonly age: number;
  readonly name: string;
  readonly email: string;
  readonly role: RolesUserDto;
  
}