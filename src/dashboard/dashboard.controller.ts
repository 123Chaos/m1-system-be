import { Controller, Get, Headers } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('list')
  getDashboardList(@Headers() headers: any) {
    const { token } = headers.token;

    if (!this.dashboardService.validateToken(token))
      return this.dashboardService.tokenError();

    return this.dashboardService.getDashboardList(token);
  }
}
