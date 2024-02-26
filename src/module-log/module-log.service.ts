/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleLogService {
  
  // 分页获取模型日志
  getModuleLogList(ctx: any) {
    return {
      code: 0,
      data: ctx,
      message: '',
    };
  }

  // 获取详情
  getModuleLogDetail(token: string) {
    return {
      code: 0,
      data: {
        token,
      },
      message: '',
    };
  }

  // 校验token
  validateToken(token: string) {
    if(token)return true
    return false
  }

  // token错误
  tokenError() {
    return {
      code: 500,
      message: '请检查token',
    }
  }
}
