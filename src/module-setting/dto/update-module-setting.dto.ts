import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleSettingDto } from './create-module-setting.dto';

export class UpdateModuleSettingDto extends PartialType(
  CreateModuleSettingDto,
) {}
