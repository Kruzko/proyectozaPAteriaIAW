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
}
