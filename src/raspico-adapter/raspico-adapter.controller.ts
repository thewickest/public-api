import { Controller, Get } from '@nestjs/common';
import { RaspicoAdapterService } from './raspico-adapter.service';

@Controller('raspico')
export class RaspicoAdapterController {
    constructor(private readonly service: RaspicoAdapterService) {}

    @Get('activate')
    async activate(): Promise<void> {
    return await this.service.activate();
    }
}
