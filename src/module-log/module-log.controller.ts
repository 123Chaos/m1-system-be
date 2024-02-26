import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ModuleLogService } from './module-log.service';

type Timestamp = number;

interface Keyword {
  type?: string;
  operator?: string;
  operateTime?: Timestamp;
}

interface ModuleLogList {
  pageSize?: string;
  pageNum?: string;
  keyword?: Keyword;
}

@Controller('module-log')
export class ModuleLogController {
  constructor(private readonly moduleLogService: ModuleLogService) {}

  @Get('list')
  getModuleLogList(@Query() query: ModuleLogList, @Headers() headers: any) {
    const { token } = headers;

    if (!this.moduleLogService.validateToken(token))
      return this.moduleLogService.tokenError();

    return this.moduleLogService.getModuleLogList(query);
  }

  @Get('detail')
  getModuleLogDetail(@Headers() headers: any) {
    const { token } = headers;

    if (!this.moduleLogService.validateToken(token))
      return this.moduleLogService.tokenError();

    return this.moduleLogService.getModuleLogDetail(token);
  }
}
