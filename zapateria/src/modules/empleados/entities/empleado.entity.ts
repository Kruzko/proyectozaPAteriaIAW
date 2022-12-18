import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;

    // pasamos id del empleado a zapato
    @OneToMany(
        () => Zapato,
        (Zapato) => Zapato.id,
        {cascade: false}
    )
    zapato?: Zapato[];

    //exportamos id empleado a pedido
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.id,
        {cascade: false }
    )
    pedido?: Pedido[];
}
