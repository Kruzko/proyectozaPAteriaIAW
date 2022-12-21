import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClientesModule } from '../clientes/clientes.module';
import { ZapatosModule } from '../zapatos/zapatos.module';
import { EmpleadosModule } from '../empleados/empleados.module';
import { MaterialesModule } from '../materiales/materiales.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ClientesModule,ZapatosModule,EmpleadosModule,MaterialesModule,AuthModule]
})
export class SeedModule {}
