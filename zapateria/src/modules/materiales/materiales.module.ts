import { Module } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';
import { Materiale } from './entities/materiale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MaterialesController],
  providers: [MaterialesService],
  imports: [
    TypeOrmModule.forFeature([ Materiale ])
  ],
})
export class MaterialesModule {}
