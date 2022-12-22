import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import { EmpleadosService } from '../empleados/empleados.service';
import { Empleado } from '../empleados/entities/empleado.entity';
import dataClientes from '../seed/data/clientes.json'
import dataEmpleados from '../seed/data/empleados.json'
@Injectable()
export class SeedService {
  constructor(
    private readonly clientesService: ClientesService,
    private readonly empleadosService: EmpleadosService
  ){}

  async runData(){

    await this.clientesService.deleteAllClients();
    await this.loadClients();

    await this.empleadosService.deleteAllempleados();
    await this.loadempleados();

  }

  private async loadClients() {
    const insertPromises = [];
    dataClientes.forEach( Cliente => {
      insertPromises.push(this.clientesService.create(Cliente))
    });
    await Promise.all(insertPromises)
  }

  private async loadempleados() {
    const insertPromises = [];
    dataEmpleados.forEach( Empleado => {
      insertPromises.push(this.empleadosService.create(Empleado))
    });
    await Promise.all(insertPromises)
  }
  
}
