import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import configuration, { Config } from './configuration';

@Injectable()
export class ConfigService extends NestConfigService {
    getAll(): Config {
        return configuration();
    }

    hasMissingVars(): boolean {
        return Object.entries(this.getAll()).filter(([key, value]) => !value).length > 0;
    }

    getMissingVars(): string[] {
        const config = this.getAll()
        return Object.keys(config).filter(k => config[k] === undefined);
    }
}