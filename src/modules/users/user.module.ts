import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto_User } from 'src/shared/entities/user.entity';
import { AdminSeeder } from 'src/shared/seeds/admin.seed';

@Module({
  imports: [TypeOrmModule.forFeature([Moto_User])],
  controllers: [UserController],
  providers: [AdminSeeder, UserService],
})
export class UserModule {}
