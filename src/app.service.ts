import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return  'Welcom to the mero moto application.';
  }
}
