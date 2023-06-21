import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { CommonResponse } from '../utils/common-response';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status >= 400) {
      const errorResponse = {
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: ctx.getRequest().url,
      };

      response.status(status).json(errorResponse);
    } else {
      const successResponse = new CommonResponse<any>(
        status,
        'Success',
        response.locals.data,
      );

      response.status(status).json(successResponse);
    }
  }
}
