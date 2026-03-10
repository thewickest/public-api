import { Module } from '@nestjs/common';
import { RaspicoAdapterService } from './raspico-adapter.service';
import { ConfigService } from 'src/config/config.service';
import { RaspicoAdapterController } from './raspico-adapter.controller';

@Module({
  exports: [RaspicoAdapterModule],
  providers: [RaspicoAdapterService, ConfigService],
  controllers: [RaspicoAdapterController]
})
export class RaspicoAdapterModule {}
