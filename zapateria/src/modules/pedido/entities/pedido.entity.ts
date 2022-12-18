import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Materiale } from "src/modules/materiales/entities/materiale.entity";
import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('date')
    fecha: Date;

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
        (Pedido) => Pedido.id,
        {cascade: false}
    )
    pedido?: Pedido;
}
