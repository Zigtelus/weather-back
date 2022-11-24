import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './schemas/user.schema';
import { UpdateReportDto } from './dtos/update-first.dto';
import { CreateReportDto } from './dtos/create-user.dto';
import { NewUser, UpdateUser } from './users-objects';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/service/token-service';




@Injectable()
export class UserService {

  constructor(
    private readonly usersRepository: UserRepository,
  ) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({userId})
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({})
  }

  async createUser(createUserDto: CreateReportDto, res): Promise<User | boolean> {



    const y = {"payload": "dwdfwef"}
    const token = new TokenService()
    console.log(token.generateToken(y))


    const qqq: string = await bcrypt.hash(createUserDto.password, 10)


    res.cookie('res.cookie', "httpOnly", {httpOnly: true})

    
    // const qwd = {...createUserDto, password: qqq}
    const newUser = new NewUser(createUserDto);

    if (!!newUser.email === true) return this.usersRepository.create(newUser);
    
    return false;
  
  }

  async updateUser(userId: string, userUpdates: UpdateReportDto): Promise<User | boolean> {

    const updateUser = new UpdateUser(userUpdates);
    if (!!updateUser.email === true) return this.usersRepository.findOneAndUpdate({userId}, updateUser);

    return false;
  }

  async removeUser(userId: string): Promise<User> {
    return this.usersRepository.remove({userId})
  }

  async removeUserID(id: string): Promise<User> {
    return this.usersRepository.removeId({id})
  }
};
