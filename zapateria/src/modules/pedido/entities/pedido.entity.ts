import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Materiale } from "src/modules/materiales/entities/materiale.entity";
import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryColumn()
    cod: string;

    @Column('text')
    fecha: string;

    //id zapato
    @ManyToOne(
        () => Zapato,
        (Zapato) => Zapato.pedido,
        {cascade: false }
    )
    zapato?: Zapato;

    //id materiales
    @ManyToOne(
        () => Materiale,
        (Materiale) => Materiale.pedido,
        {cascade: false }
    )
    materiales?: Materiale;
    //id cliente
    @ManyToOne(
        () => Cliente,
        (Cliente) => Cliente.pedido,
        {cascade: false}
    )
    cliente?: Cliente;
    //id empleado
    @ManyToOne(
        () => Empleado,
        (Empleado) => Empleado.pedido,
        {cascade: false}
    )
    empleado?: Empleado;
    //relacion one to one de pedido a cliente
    @OneToOne(
        (type) => Pedido,
        (Pedido) => Pedido.cod,
        {cascade: false}
    )
    pedido?: Pedido;

    //relacion one to many pedido a zapato
    @OneToMany(
        () => Zapato,
        (Zapato) => Zapato.cod,
        {cascade: false}
    )
    zapatos?: Zapato;
}
