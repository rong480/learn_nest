import { Controller, Get, Req, Res, Param, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':name')
  findOne(@Param('name') name: string): string{
    return `我家两只猫--${name}`;
  }

  @Get()
  findAll(@Req() req: Request): string{
    return '我家两只猫';
  }

  // @Get()
  // findAll(@Res() res: Response){
  //   res.status(HttpStatus.OK).json([{"status": "ok", "code": 200}]);
  // }
}
