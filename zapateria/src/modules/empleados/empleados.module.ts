import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { Empleado } from './entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
  imports: [
    TypeOrmModule.forFeature([ Empleado ])
  ],
  exports: [EmpleadosService]
})
export class EmpleadosModule {}
