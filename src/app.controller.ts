import { Controller, Get, Res, Post } from '@nestjs/common';
import { AppService } from './app.service';

const cookieName = 'thecookie';
const cookieValue = 'thevalue';
const cookieConfig = { path: '/' };

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('setCookie')
  async setCookie(@Res() res) {

    res.setCookie(cookieName, cookieValue, cookieConfig);

    return res.send(200);
  }

  @Get('removeCookie')
  async removeCookie(@Res() res) {

    res.clearCookie(cookieName, cookieConfig);

    return res.send(200);
  }

  @Post('removeCookie')
  async removeCookieByPost(@Res() res) {

    res.clearCookie(cookieName, cookieConfig);

    return res.send(200);
  }
}
