import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':nif')
  findOne(@Param('nif') nif: string) {
    return this.empleadosService.findOne(nif);
  }

  @Patch(':nif')
  update(@Param('nif') nif: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(nif, updateEmpleadoDto);
  }

  // @Delete(':nif')
  // remove(@Param('nif') nif: string) {
  //   return this.empleadosService.remove(nif);
  // }

  @Delete()
  deleteAllempleados() {
    return this.empleadosService.deleteAllempleados();
  }
  
}
