import { Injectable } from '@nestjs/common';
import { ZodType } from 'zod';

@Injectable()
export class ValidationService {
  async validate<T>(zod: ZodType<T>, data: T): Promise<T> {
    return await zod.parseAsync(data);
  }
}
