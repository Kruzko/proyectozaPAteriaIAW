import { Materiale } from "src/modules/materiales/entities/materiale.entity";
import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //id empleado
}
