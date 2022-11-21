import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserRepositury } from './user.repository';
import { User } from './schemas/user.schema';
import { UpdateReportDto } from './dtos/update-first.dto';
import { CreateReportDto } from './dtos/create-user.dto';
import { CoordsUserDto } from './dtos/coords-user.dto';
import { RolesUserDto } from './dtos/roles-user.dto';
import { NewUser, UpdateUser } from './users-objects';

type Cords = null | CoordsUserDto;


// NewUser
// UpdateUser

@Injectable()
export class UserService {

  constructor(private readonly usersRepository: UserRepositury) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({userId})
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({})
  }

  async createUser(createReportDto: CreateReportDto): Promise<User | boolean> {

    const newUser = new NewUser(createReportDto);
    if (!!newUser.email === true) return this.usersRepository.create(newUser);
    
    return false;
  
  }

  async updateUser(userId: string, userUpdates: UpdateReportDto): Promise<User> {

    const updateUser = new UpdateUser(userUpdates);
    return this.usersRepository.findOneAndUpdate({userId}, updateUser)
  }

  async removeUser(userId: string): Promise<User> {
    return this.usersRepository.remove({userId})
  }

  async removeUserID(id: string): Promise<User> {
    return this.usersRepository.removeId({id})
  }
};
