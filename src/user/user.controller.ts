import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

interface UserInfo {
  newPassword?: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('center')
  setUserInfo(@Body() body: UserInfo) {
    this.userService.setUserInfo(body);
  }
}
