import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './shared/utils/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
