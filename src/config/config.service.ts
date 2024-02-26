import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  // 保存配置
  setConfig(data: any) {
    return data;
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
