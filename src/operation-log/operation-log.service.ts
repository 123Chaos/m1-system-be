import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationLogService {
  // 分页获取模型日志
  getOperationLogList(ctx: any) {
    return {
      code: 0,
      data: ctx,
      message: '',
    };
  }

  // 校验token
  validateToken(token: string) {
    if (token) return true;
    return false;
  }

  // token错误
  tokenError() {
    return {
      code: 500,
      message: '请检查token',
    };
  }
}
