import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryColumn('uuid')
    nif: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;

    // pasamos id del empleado a zapato
    @OneToMany(
        () => Zapato,
        (Zapato) => Zapato.nif,
        {cascade: false}
    )
    zapato?: Zapato[];

    //exportamos id empleado a pedido
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.nif,
        {cascade: false }
    )
    pedido?: Pedido[];
}
