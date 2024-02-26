import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ConfigService } from './config.service';

interface ConfigSave {
  userId: string;
  dashboardInfoSwitch?: boolean;
  dashboardInfoContent?: string;
  uploadInterval?: string;
  mission?: string;
  permission?: string;
  accountStatus?: boolean;
}

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post('save')
  setConfig(@Body() body: ConfigSave, @Headers() headers: any) {
    const { token } = headers;

    if (!this.configService.validateToken(token))
      return this.configService.tokenError();

    return this.configService.setConfig(body);
  }
}
