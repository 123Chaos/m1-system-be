import { Test, TestingModule } from '@nestjs/testing';
import { ModuleSettingService } from './module-setting.service';

describe('ModuleSettingService', () => {
  let service: ModuleSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleSettingService],
    }).compile();

    service = module.get<ModuleSettingService>(ModuleSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
