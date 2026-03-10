import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RaspicoAdapterModule } from './raspico-adapter/raspico-adapter.module';
import { RaspicoAdapterService } from './raspico-adapter/raspico-adapter.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    RaspicoAdapterModule,
    ConfigModule],
  controllers: [AppController],
  providers: [AppService, RaspicoAdapterService],
})
export class AppModule {}
