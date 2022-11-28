import { Module } from '@nestjs/common';
import { ZapatosService } from './zapatos.service';
import { ZapatosController } from './zapatos.controller';

@Module({
  controllers: [ZapatosController],
  providers: [ZapatosService]
})
export class ZapatosModule {}
