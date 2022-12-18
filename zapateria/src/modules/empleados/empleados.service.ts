import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {

  constructor(
    @InjectRepository(Empleado)
    private readonly empleadorepository: Repository<Empleado>
  ){

  }

  async create(createEmpleadoDto: CreateEmpleadoDto){
    try{
      const empleado = this.empleadorepository.create(createEmpleadoDto);
      console.log(empleado);
      await this.empleadorepository.save(empleado);
      return empleado;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.empleadorepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
