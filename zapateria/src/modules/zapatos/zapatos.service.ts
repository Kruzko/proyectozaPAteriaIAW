import { Injectable } from '@nestjs/common';
import { CreateZapatoDto } from './dto/create-zapato.dto';
import { UpdateZapatoDto } from './dto/update-zapato.dto';

@Injectable()
export class ZapatosService {
  create(createZapatoDto: CreateZapatoDto) {
    return 'This action adds a new zapato';
  }

  findAll() {
    return `This action returns all zapatos`;
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
