import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { routes } from 'src/routes';

@Controller(`${routes.users}`)
export class UserController {

  constructor(private readonly firstService: UserService){}


  @Get()
  async getUsers(): Promise<User[]> {
    // const q = (await this.firstService.getUsers())

    // for (let i = 0; i < q.length; i++) {
    //   this.removeUser(q[i].userId)
    // }

    return this.firstService.getUsers()
  }

  @Post()
  async createUser(@Body() createUserDto: CreateReportDto): Promise<User | boolean> {
    return this.firstService.createUser(createUserDto)
  }

  @Patch(':userId')
  async updateUser( @Body() updateUserDto: CreateReportDto, @Param('userId') userId: string): Promise<User> {
    return this.firstService.updateUser(userId, updateUserDto)
  }

  @Delete(':userId')
  async removeUser( @Param('userId') userId: string ): Promise<User> {
    console.log('userId ', userId)
    return this.firstService.removeUser(userId)
  }


};
