import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import { EmpleadosService } from '../empleados/empleados.service';
import { Empleado } from '../empleados/entities/empleado.entity';
import { Materiale } from '../materiales/entities/materiale.entity';
import { MaterialesService } from '../materiales/materiales.service';
import dataClientes from '../seed/data/clientes.json'
import dataEmpleados from '../seed/data/empleados.json'
import datamateriales from '../seed/data/materiales.json'
import { Zapato } from '../zapatos/entities/zapato.entity';
import { ZapatosService } from '../zapatos/zapatos.service';
import dataZapatos from '../seed/data/zapatos.json'
import dataUsuarios from '../seed/data/usuarios.json'
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/entities/user.entity';
@Injectable()
export class SeedService {
  constructor(
    private readonly clientesService: ClientesService,
    private readonly empleadosService: EmpleadosService,
    private readonly materialesService: MaterialesService,
    private readonly zapatoService: ZapatosService,
    private readonly usuariosService: AuthService
  ){}

  async runData(){

    await this.clientesService.deleteAllClients();
    await this.loadClients();

    await this.empleadosService.deleteAllempleados();
    await this.loadempleados();

    await this.materialesService.deleteAllmateriales();
    await this.loadmateriales();

    await this.zapatoService.deleteAllzapatos();
    await this.loadzapatos();

    await this.usuariosService.deleteAllusuarios();
    await this.loadusuarios();

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

  private async loadmateriales() {
    const insertPromises = [];
    datamateriales.forEach( Materiale => {
      insertPromises.push(this.materialesService.create(Materiale))
    });
    await Promise.all(insertPromises)
  }

  private async loadzapatos() {
    const insertPromises = [];
    dataZapatos.forEach( Zapato => {
      insertPromises.push(this.zapatoService.create(Zapato))
    });
    await Promise.all(insertPromises)
  }

  private async loadusuarios() {
    const insertPromises = [];
    dataUsuarios.forEach( User => {
      insertPromises.push(this.usuariosService.create(User))
    });
    await Promise.all(insertPromises)
  }

}
