import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLogService } from './module-log.service';

describe('ModuleLogService', () => {
  let service: ModuleLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleLogService],
    }).compile();

    service = module.get<ModuleLogService>(ModuleLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
