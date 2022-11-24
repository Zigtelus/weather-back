import { v4 as uuidv4 } from 'uuid';
import { CoordsUserDto } from './dtos/coords-user.dto';
import { RolesUserDto } from './dtos/roles-user.dto';


type Cords = null | CoordsUserDto;


export class UpdateUser {
  age: number;
  password: string;
  name: string;
  email: string;
  lastVisit = Date();
  role: RolesUserDto;
  coords: CoordsUserDto

  constructor({age, password, name, email, role, coords}) {
    this.age = age;
    this.password = this.getPassword(password);
    this.name = name;
    this.email = this.getEmail(email);
    this.role = this.getRole(role);
    this.coords = {...coords};
  };

  getPassword = (text: string): string => {
    // const qqq: string = await bcrypt.hash(text, 10)
    return text
  }

  getEmail(email: string): string {


    const indexPlace = email.indexOf(' ');
    if (indexPlace >= 0) return '';

    const indexDoge = email.indexOf('@');
    if (indexDoge <= 0) return '';

    const fromDoge = email.slice(indexDoge+1, email.length);
    const indexDote = fromDoge.indexOf('.');
    if (indexDote <= 0 || indexDote == fromDoge.length-1 ) return '';

    const fromDoteSecond = fromDoge.slice(indexDote+1, fromDoge.length);
    const indexDoteSecond = fromDoteSecond.indexOf('.');
    if (indexDoteSecond >= 0) return '';


    return email;
  };

  getRole(role: RolesUserDto): RolesUserDto {
    if (role === "admin" || role === "user") return role;
  };

};


export class NewUser extends UpdateUser {
  userId = uuidv4();
  dateRegistration = Date();
  lastVisit = "0";

  constructor({age, password, name, email, role, coords}) {
    super({age, password, name, email, role, coords});
  };
};