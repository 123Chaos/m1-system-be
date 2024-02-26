import { Module } from '@nestjs/common';
import { ModuleSettingService } from './module-setting.service';
import { ModuleSettingController } from './module-setting.controller';

@Module({
  controllers: [ModuleSettingController],
  providers: [ModuleSettingService],
})
export class ModuleSettingModule {}
