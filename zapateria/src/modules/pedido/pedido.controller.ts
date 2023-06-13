import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.pedidoService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    console.log(cod,updatePedidoDto)
    return this.pedidoService.update(cod, updatePedidoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pedidoService.remove(+id);
  // }

  @Delete(':cod')
  deleteOne(@Param('cod') cod: string) {
    return this.pedidoService.deleteOne(cod);
   }

  @Delete()
  deleteAllpedidos() {
    return this.pedidoService.deleteAllpedidos();
  }
}
