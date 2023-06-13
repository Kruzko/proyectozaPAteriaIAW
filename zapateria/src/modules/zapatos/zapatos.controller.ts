import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZapatosService } from './zapatos.service';
import { CreateZapatoDto } from './dto/create-zapato.dto';
import { UpdateZapatoDto } from './dto/update-zapato.dto';

@Controller('zapatos')
export class ZapatosController {
  constructor(private readonly zapatosService: ZapatosService) {}

  @Post()
  create(@Body() createZapatoDto: CreateZapatoDto) {
    return this.zapatosService.create(createZapatoDto);
  }

  @Get()
  findAll() {
    return this.zapatosService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.zapatosService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateZapatoDto: UpdateZapatoDto) {
    console.log(cod,updateZapatoDto)
    return this.zapatosService.update(cod, updateZapatoDto);
  }

  @Delete(':cod')
  deleteOne(@Param('cod') cod: string) {
    return this.zapatosService.deleteOne(cod);
   }

  @Delete()
  deleteAllzapatos() {
    return this.zapatosService.deleteAllzapatos();
  }
}
