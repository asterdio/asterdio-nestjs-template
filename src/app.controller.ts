import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonResponse } from './shared/utils/common-response';

@Controller('health-checker')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): CommonResponse<string> {
    const getdata = this.appService.getHello();
    return new CommonResponse<string>(200, getdata);
  }
}
