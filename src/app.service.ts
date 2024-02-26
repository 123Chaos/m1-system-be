/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
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
