import { Module } from '@nestjs/common';
import { ZapatosService } from './zapatos.service';
import { ZapatosController } from './zapatos.controller';
import { Zapato } from './entities/zapato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ZapatosController],
  providers: [ZapatosService],
  imports: [
    TypeOrmModule.forFeature([ Zapato ])
  ],
})
export class ZapatosModule {}
