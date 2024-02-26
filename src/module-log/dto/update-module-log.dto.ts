import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleLogDto } from './create-module-log.dto';

export class UpdateModuleLogDto extends PartialType(CreateModuleLogDto) {}
