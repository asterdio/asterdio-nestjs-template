import slugify from 'slugify';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { uuidGenerate } from '../utils/uuid.generate';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

enum From {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  PHONE = 'phone',
}

@Entity()
export class Moto_User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @Column({ type: 'enum', enum: From, default: From.PHONE })
  from: From;

  @Column()
  password: string;

  @Column({ nullable: true })
  profile: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ type: 'boolean', default: false })
  newUser: boolean;

  @Column({ type: 'boolean', default: false })
  emailVerified: boolean;

  @Column({ type: 'boolean', default: false })
  phoneNumberVerified: boolean;

  @Column({ nullable: true })
  emailVerificationToken: string;

  @Column({ nullable: true })
  loginOTP: number;

  @Column({ type: 'boolean', default: false })
  alertNotification: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  updateSlugFromName(): void {
    this.slug = slugify(this.name).toLowerCase();
  }
  @BeforeInsert()
  async generateId() {
    this.id = await uuidGenerate();
  }
}
