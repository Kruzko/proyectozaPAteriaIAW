import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  findOne(cod: string) {
    return this.Zapatorepository.findOne({
      where: {cod}
    });
  }

  update(id: number, updateZapatoDto: UpdateZapatoDto) {
    return `This action updates a #${id} zapato`;
  }

  async deleteOne(cod: string) {
    return await this.Zapatorepository.delete({
      cod
    });
    // return `This action removes a #${cod} zapato`;
  }

  async deleteAllzapatos(){
    const query = this.Zapatorepository.createQueryBuilder('zapato');
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
