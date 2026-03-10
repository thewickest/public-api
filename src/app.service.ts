import { Injectable } from '@nestjs/common';
import { RaspicoAdapterService } from './raspico-adapter/raspico-adapter.service';

@Injectable()
export class AppService {
  constructor(private readonly picoService: RaspicoAdapterService) {}

  async switch(): Promise<string> {
    return await this.picoService.switch()
  }
}
