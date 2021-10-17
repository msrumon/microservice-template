import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    return this.appService.fetchData();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async postData(@Body() body: object) {
    return this.appService.storeData(body);
  }

  @Get(':id')
  async getDatum(@Param('id') id: string) {
    return this.appService.fetchDatum(id);
  }

  @Put(':id')
  async putDatum(@Param('id') id: string, @Body() body: object) {
    return this.appService.updateDatum(id, body);
  }

  @Delete(':id')
  async deleteDatum(@Param('id') id: string) {
    return this.appService.deleteDatum(id);
  }
}
