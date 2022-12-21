import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import dataClientes from '../seed/data/clientes.json'
@Injectable()
export class SeedService {
  constructor(
    private readonly clientesService: ClientesService
  ){}

  async runData(){

    await this.clientesService.deleteAllClients();
    await this.loadClients();

  }

  private async loadClients() {
    const insertPromises = [];
    dataClientes.forEach( Cliente => {
      insertPromises.push(this.clientesService.create(Cliente))
    });
    await Promise.all(insertPromises)
  }
}
