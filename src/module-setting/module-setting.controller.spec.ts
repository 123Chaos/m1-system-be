import { Test, TestingModule } from '@nestjs/testing';
import { ModuleSettingController } from './module-setting.controller';
import { ModuleSettingService } from './module-setting.service';

describe('ModuleSettingController', () => {
  let controller: ModuleSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleSettingController],
      providers: [ModuleSettingService],
    }).compile();

    controller = module.get<ModuleSettingController>(ModuleSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
