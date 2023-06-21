import { Connection } from 'typeorm';
import { Moto_User, Role } from '../entities/user.entity';
import { encryptPassword } from '../utils/bcrypt-password';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminSeeder {
  constructor(
    @InjectRepository(Moto_User)
    private adminRepository: Repository<Moto_User>,
  ) {}

  async seed() {
    // Check if admin data already exists
    const adminCount = await this.adminRepository.count();
    if (adminCount > 0) {
      return;
    }

    // Insert admin data
    const adminData = {
      name: 'Mero Moto',
      email: 'meromoto@gmail.com',
      phoneNumber: '9860536317',
      password: await encryptPassword('mero@moto2023'), // Encrypt the password using encryptPassword
      role: Role.ADMIN,
      emailVerified: true,
      phoneNumberVerified: true,
    };

    const admins = this.adminRepository.create(adminData);
    await this.adminRepository.save(admins);
  }
}
