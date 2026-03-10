import { Module } from '@nestjs/common';
import { RaspicoAdapterService } from './raspico-adapter.service';
import { ConfigService } from 'src/config/config.service';

@Module({
  exports: [RaspicoAdapterModule],
  providers: [RaspicoAdapterService, ConfigService]
})
export class RaspicoAdapterModule {}
