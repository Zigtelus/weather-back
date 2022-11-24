import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateReportDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { routes } from 'src/routes';
import { Request, Response } from 'express';
import { TokenService } from 'src/service/token-service';




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

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    
    return this.firstService.getUserById(userId)
  }

  @Post()
  async createUser(@Body() createUserDto: CreateReportDto, @Res({passthrough: true}) res: Response): Promise<User | boolean> {


    const y = {"payload": "dwdfwef"}


    // const accessToken = jwt.sign({"payload": "dwdfwef"}, {expiresIn: '20d'})


    const token = new TokenService()
    // const refreshToken = jwt.sign(y, 'dwf-wqfde-qwf', {expiresIn: '20d'})
    console.log(token.generateToken(y))
    return this.firstService.createUser(createUserDto, res)
  }

  @Patch(':userId')
  async updateUser( @Body() updateUserDto: CreateReportDto, @Param('userId') userId: string): Promise<User | boolean> {
    return this.firstService.updateUser(userId, updateUserDto)
  }

  @Delete(':userId')
  async removeUser( @Param('userId') userId: string ): Promise<User> {
    return this.firstService.removeUser(userId)
  }


};
