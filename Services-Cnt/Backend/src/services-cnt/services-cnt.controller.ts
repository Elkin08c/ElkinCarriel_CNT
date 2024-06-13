import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ServicesCntService } from './services-cnt.service';
import { CreateServicesCntDto } from './dto/create-services-cnt.dto';
import { UpdateServicesCntDto } from './dto/update-services-cnt.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags ('services')
export class ServicesCntController {
  constructor(private readonly ServicesCntService: ServicesCntService) {}

  @Post()
  create(@Body() createServicesCntDto: CreateServicesCntDto) {
    return this.ServicesCntService.create(createServicesCntDto);
  }
  @Get()
  findAll(){
    return this.ServicesCntService.findAll();
  }
  @Get (':id')
  findOne(@Param('id') id: string) {
    return this.ServicesCntService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateServicesCntDto: UpdateServicesCntDto,
  ) {
    return this.ServicesCntService.update(+id, UpdateServicesCntDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.ServicesCntService.remove(+id);
  }

}
