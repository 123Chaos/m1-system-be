import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ModuleLogService } from './module-log.service';
import { CreateModuleLogDto } from './dto/create-module-log.dto';
import { UpdateModuleLogDto } from './dto/update-module-log.dto';
@Controller('module-log')
export class ModuleLogController {
  constructor(private readonly moduleLogService: ModuleLogService) {}

  @Get('list')
  getList(@Query() query: object) {
    return this.moduleLogService.getList(query);
  }
}
