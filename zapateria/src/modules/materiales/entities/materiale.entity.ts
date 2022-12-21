import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Materiale {
    @PrimaryColumn('uuid')
    nif: string;

    @Column('text')
    descripcion: string;

    //exportar id materiales

    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.nif,
        {cascade: false }
    )
    pedido?: Pedido[];
}
