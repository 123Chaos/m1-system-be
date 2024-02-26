import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLogController } from './module-log.controller';
import { ModuleLogService } from './module-log.service';

describe('ModuleLogController', () => {
  let controller: ModuleLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleLogController],
      providers: [ModuleLogService],
    }).compile();

    controller = module.get<ModuleLogController>(ModuleLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
