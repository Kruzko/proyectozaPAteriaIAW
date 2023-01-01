import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService],
  imports: [
    TypeOrmModule.forFeature([ Pedido ])
  ],
  exports: [ PedidoService ]
})
export class PedidoModule {}
