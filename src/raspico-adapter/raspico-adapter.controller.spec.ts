import { Test, TestingModule } from '@nestjs/testing';
import { RaspicoAdapterController } from './raspico-adapter.controller';

describe('RaspicoAdapterController', () => {
  let controller: RaspicoAdapterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaspicoAdapterController],
    }).compile();

    controller = module.get<RaspicoAdapterController>(RaspicoAdapterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
