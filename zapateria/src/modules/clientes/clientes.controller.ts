import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {
    console.log('cllientes')
  }

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    console.log('listado de clientes');
    return this.clientesService.findAll();
  }

  @Get(':nif')
  findOne(@Param('nif') nif: string) {
    return this.clientesService.findOne(nif);
  }

  @Patch(':nif')
  update(@Param('nif') nif: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(nif, updateClienteDto);
  }

  @Delete(':nif')
  deleteOne(@Param('nif') nif: string) {
    return this.clientesService.deleteOne(nif);
   }

  @Delete()
  deleteAllClients() {
    return this.clientesService.deleteAllClients();
  }
}
