import { v4 as uuidv4 } from 'uuid';
import { CoordsUserDto } from './dtos/coords-user.dto';
import { RolesUserDto } from './dtos/roles-user.dto';


type Cords = null | CoordsUserDto;


export class UpdateUser {
  age: number;
  name: string;
  email: string;
  role: RolesUserDto;

  constructor({age, name, email, role}) {
    this.age = age;
    this.name = name;
    this.email = this.getEmail(email);
    this.role = this.getRole(role);
  };

  getEmail(email: string): string {

    const indexDoge = email.indexOf('@') ;
    if (indexDoge <= 0) return '';

    const fromDote = email.slice(indexDoge, email.length);
    const indexDote = fromDote.indexOf('.');
    if (indexDote <= 0) return '';

    return email;
  };

  getRole(role: RolesUserDto): RolesUserDto {
    if (role === "admin" || role === "user") return role;
  };
};


export class NewUser extends UpdateUser {
  userId = uuidv4();
  dateRegistration = Date();
  coords: Cords;

  constructor({age, name, email, role, coords}) {
    super({age, name, email, role});
    this.coords = this.getCoords(coords);
  };

  getCoords(coords: Cords): Cords  {
    if (coords === null) return null;
    return {...coords};
  };
};