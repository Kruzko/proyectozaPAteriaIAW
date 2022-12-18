import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterialeDto } from './dto/create-materiale.dto';
import { UpdateMaterialeDto } from './dto/update-materiale.dto';
import { Materiale } from './entities/materiale.entity';

@Injectable()
export class MaterialesService {

  constructor(
    @InjectRepository(Materiale)
    private readonly Materialesrepository: Repository<Materiale>
  ){

  }

  async create(createMaterialeDto: CreateMaterialeDto){
    try{
      const materiale = this.Materialesrepository.create(createMaterialeDto);
      console.log(materiale);
      await this.Materialesrepository.save(materiale);
      return materiale;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }
  
  findAll() {
    return this.Materialesrepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} materiale`;
  }

  update(id: number, updateMaterialeDto: UpdateMaterialeDto) {
    return `This action updates a #${id} materiale`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiale`;
  }
}
