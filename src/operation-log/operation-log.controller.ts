import { Controller, Get, Query, Headers } from '@nestjs/common';
import { OperationLogService } from './operation-log.service';

type Timestamp = number;

interface Keyword {
  type?: string;
  operator?: string;
  operateTime?: Timestamp;
}

interface OperationLogList {
  pageSize?: string;
  pageNum?: string;
  keyword?: Keyword;
}

@Controller('operation-log')
export class OperationLogController {
  constructor(private readonly operationLogService: OperationLogService) {}

  @Get('list')
  getOperationLogList(
    @Query() query: OperationLogList,
    @Headers() headers: any,
  ) {
    const { token } = headers;

    if (!this.operationLogService.validateToken(token))
      return this.operationLogService.tokenError();

    return this.operationLogService.getOperationLogList(query);
  }
}
