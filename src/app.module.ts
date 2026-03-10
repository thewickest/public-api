import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RaspicoAdapterModule } from './raspico-adapter/raspico-adapter.module';
import { RaspicoAdapterService } from './raspico-adapter/raspico-adapter.service';
import { ConfigModule } from './config/config.module';
import { RaspicoAdapterController } from './raspico-adapter/raspico-adapter.controller';

@Module({
  imports: [
    RaspicoAdapterModule,
    ConfigModule],
  controllers: [AppController, RaspicoAdapterController],
  providers: [AppService, RaspicoAdapterService],
})
export class AppModule {}
