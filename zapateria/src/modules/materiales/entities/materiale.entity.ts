import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materiale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    descripcion: string;

    //exportar id materiales

    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.id,
        {cascade: false }
    )
    pedido?: Pedido[];
}
