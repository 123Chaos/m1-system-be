import { Module } from '@nestjs/common';
import { ModuleLogService } from './module-log.service';
import { ModuleLogController } from './module-log.controller';

@Module({
  controllers: [ModuleLogController],
  providers: [ModuleLogService],
})
export class ModuleLogModule {}
