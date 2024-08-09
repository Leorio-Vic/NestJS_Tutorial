import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    console.log('create cat', createCatDto);
    return res.status(HttpStatus.CREATED);
  }

  @Get()
  findAll(@Res() res: Response) {
    return res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}