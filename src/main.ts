import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { AdminSeeder } from './shared/seeds/admin.seed';
import { config } from 'dotenv';

async function bootstrap() {
  // Load environment variables from .env file
  config();

  const app = await NestFactory.create(AppModule);
  // globle error handle
  app.useGlobalFilters(new HttpExceptionFilter());

  const adminSeeder = app.get(AdminSeeder);
  await adminSeeder.seed();

  // Set the global prefix here
  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
