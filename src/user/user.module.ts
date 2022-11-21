import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserRepositury } from './user.repository';

@Module({
  providers: [UserService, UserRepositury],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema }])
  ]
})
export class UserModule {}
