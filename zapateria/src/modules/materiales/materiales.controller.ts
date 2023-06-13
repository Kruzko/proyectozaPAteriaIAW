import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { CreateMaterialeDto } from './dto/create-materiale.dto';
import { UpdateMaterialeDto } from './dto/update-materiale.dto';

@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  @Post()
  create(@Body() createMaterialeDto: CreateMaterialeDto) {
    return this.materialesService.create(createMaterialeDto);
  }

  @Get()
  findAll() {
    return this.materialesService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.materialesService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateMaterialeDto: UpdateMaterialeDto) {
    console.log(cod,updateMaterialeDto)
    return this.materialesService.update(cod, updateMaterialeDto);
  }

  @Delete(':cod')
  deleteOne(@Param('cod') cod: string) {
    return this.materialesService.deleteOne(cod);
   }

  @Delete()
  deleteAllmateriales() {
    return this.materialesService.deleteAllmateriales();
  }
}
