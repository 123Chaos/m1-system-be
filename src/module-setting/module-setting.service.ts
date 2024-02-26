import { Injectable } from '@nestjs/common';

type Timestamp = number;

interface ModuleLogLogger {
  content: string;
  type: string;
  operator: string;
  operatorTime: Timestamp;
}

@Injectable()
export class ModuleSettingService {
  // 模型配置
  setModuleSetting(body: any) {
    return body;
  }

  // 打Log
  setLogger(data: ModuleLogLogger) {
    return {
      code: 0,
      data,
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
