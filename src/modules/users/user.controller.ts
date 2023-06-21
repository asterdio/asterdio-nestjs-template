import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CommonResponse } from 'src/shared/utils/common-response';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(): Promise<CommonResponse<User>> {
    const getdata = await this.userService.getUser();
    return new CommonResponse<User>(200, 'User find successfull', getdata);
  }
}
