import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienterepository: Repository<Cliente>
  ){

  }

  async create(createClienteDto: CreateClienteDto){
    try{
      const cliente = this.clienterepository.create(createClienteDto);
      console.log(cliente);
      await this.clienterepository.save(cliente);
      return cliente;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.clienterepository.find({});
  }

  findOne(nif: string) {
    return this.clienterepository.findOne({
      where: {
        nif
      }
    });
  }

  update(nif: string, updateClienteDto: UpdateClienteDto) {
    return this.clienterepository.update(
      nif,
      updateClienteDto
    )
  }

  async deleteAllClients(){
    const query = this.clienterepository.createQueryBuilder('cliente');
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

  async deleteOne(nif: string) {
    return await this.clienterepository.delete({
      nif
    });
    // return `This action removes a #${cod} zapato`;
  }
}
