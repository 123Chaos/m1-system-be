import { Controller, Post, Body, Get } from '@nestjs/common';
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

  @Get('test')
  test() {
    return {
      code: 0,
      data: `()=>{console.log('worker!!')}`,
    };
  }
}
