import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as requestIp from 'request-ip';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors();
  app.use('/uploads', express.static('./uploads'));
  app.use(requestIp.mw());
  await app.listen(3000);
}
bootstrap();
