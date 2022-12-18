import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;

    //exportar id a pedido
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.id,
        {cascade: false }
    )
    pedido?: Pedido[];
    //relacion one to one de pedido a cliente
    @OneToOne(
        () => Cliente,
        (Cliente) => Cliente.pedido,
    )
    @JoinColumn()
    pedidos?: Cliente;
}
