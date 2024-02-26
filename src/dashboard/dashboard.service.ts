import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  // 获取仪表盘信息
  getDashboardList(token: string) {
    return {
      token,
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
