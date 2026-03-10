import { Test, TestingModule } from '@nestjs/testing';
import { RaspicoAdapterService } from './raspico-adapter.service';

describe('RaspicoAdapterService', () => {
  let service: RaspicoAdapterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaspicoAdapterService],
    }).compile();

    service = module.get<RaspicoAdapterService>(RaspicoAdapterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
