import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { Moto_User } from 'src/shared/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Moto_User)
    private usersRepository: Repository<Moto_User>,
  ) {}
 async getUser(): Promise<User> {
    const user: User = {
      name: 'Sarbin Shrestha',
      role: 'admin',
      email: 'sarbin.shrestha@asterdio.com',
      phone: '9860536317',
    };
   const data = await this.usersRepository.find()
   console.log(data, "0000000000000000000000000000")
    return user;
  }
}
