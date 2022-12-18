import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZapatoDto } from './dto/create-zapato.dto';
import { UpdateZapatoDto } from './dto/update-zapato.dto';
import { Zapato } from './entities/zapato.entity';

@Injectable()
export class ZapatosService {

  constructor(
    @InjectRepository(Zapato)
    private readonly Zapatorepository: Repository<Zapato>
  ){

  }

  async create(createZapatoDto: CreateZapatoDto){
    try{
      const zapato = this.Zapatorepository.create(createZapatoDto);
      console.log(zapato);
      await this.Zapatorepository.save(zapato);
      return zapato;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }
  
  findAll() {
    return this.Zapatorepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} zapato`;
  }

  update(id: number, updateZapatoDto: UpdateZapatoDto) {
    return `This action updates a #${id} zapato`;
  }

  remove(id: number) {
    return `This action removes a #${id} zapato`;
  }
}
