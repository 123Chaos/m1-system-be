import { Injectable } from '@nestjs/common';
import { CreateModuleLogDto } from './dto/create-module-log.dto';
import { UpdateModuleLogDto } from './dto/update-module-log.dto';

@Injectable()
export class ModuleLogService {
  // 分页获取模型日志
  getList(ctx: object) {
    console.log(ctx)
    return {
      code: 0,
      data: ctx,
      message: '',
    }
  }
  // 获取
}
