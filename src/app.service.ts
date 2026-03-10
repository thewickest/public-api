import { Injectable } from '@nestjs/common';
import { RaspicoAdapterService } from './raspico-adapter/raspico-adapter.service';

@Injectable()
export class AppService {
  constructor(private readonly picoService: RaspicoAdapterService) {}

  async getHello(): Promise<string> {
    return await 'Hello world!'
  }
}
