import { Module } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';

@Module({
  controllers: [MaterialesController],
  providers: [MaterialesService]
})
export class MaterialesModule {}
