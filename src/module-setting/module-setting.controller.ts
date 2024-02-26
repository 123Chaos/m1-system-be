import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ModuleSettingService } from './module-setting.service';

interface ModuleSettingSave {
  userId: string;
  modulePermission: Array<any>;
}

@Controller('module-setting')
export class ModuleSettingController {
  constructor(private readonly moduleSettingService: ModuleSettingService) {}

  @Post('save')
  setModuleSetting(@Body() body: ModuleSettingSave, @Headers() headers: any) {
    const { token } = headers;

    if (!this.moduleSettingService.validateToken(token))
      return this.moduleSettingService.tokenError();

    return this.moduleSettingService.setModuleSetting(body);
  }
}
