import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientesModule } from './modules/clientes/clientes.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { MaterialesModule } from './modules/materiales/materiales.module';
import { ZapatosModule } from './modules/zapatos/zapatos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    ClientesModule,
    EmpleadosModule,
    MaterialesModule,
    ZapatosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
