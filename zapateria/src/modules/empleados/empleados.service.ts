import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  findOne(nif: string) {
    return `This action returns a #${nif} empleado`;
  }

  update(nif: string, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${nif} empleado`;
  }

  remove(nif: string) {
    return `This action removes a #${nif} empleado`;
  }

  async deleteAllempleados(){
    const query = this.empleadorepository.createQueryBuilder('empleado');
    try{
      return await query
      .delete()
      .where({})
      .execute()
    }catch(error){
      this.handleDBEerrors(error)
    }
  }
  private handleDBEerrors (error: any): never{
    throw new BadRequestException(error.detail)
  }
  
}
