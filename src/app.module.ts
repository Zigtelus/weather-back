import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://LOGIN:PASSWORD@cluster0.asqpg.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
