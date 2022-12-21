import { type } from "os";
import { User } from "src/modules/auth/entities/user.entity";
import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryColumn('uuid')
    nif: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;

    //exportar id a pedido
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.nif,
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

    //relacion one to one con auth o user
    @OneToOne(
        (type) => User,
        (User) => User.cliente,
        {cascade: false}
    )
    perfil?: User;
}
