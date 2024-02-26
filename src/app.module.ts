import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleLogModule } from './module-log/module-log.module';
import { ModuleSettingModule } from './module-setting/module-setting.module';
import { OperationLogModule } from './operation-log/operation-log.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    UserModule,
    ModuleLogModule,
    ModuleSettingModule,
    OperationLogModule,
    ConfigModule,
    UploadModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
