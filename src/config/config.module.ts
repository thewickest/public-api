import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NestConfigModule, ConfigService as NestConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [NestConfigModule.forRoot({
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true
  })],
  exports: [ConfigService],
  providers: [ConfigService, NestConfigService],
})
export class ConfigModule {}
