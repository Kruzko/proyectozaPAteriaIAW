import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Zapato {
    @PrimaryColumn()
    cod: string;

    @Column('text')
    tipo: string;

    //id empleado
    @ManyToOne(
        () => Empleado,
        (Empleado) => Empleado.zapato,
        {cascade:false}
    )
    empleado?: Empleado;

    //exportando idzapato
    @OneToMany(
        () => Pedido,
        (Pedido) => Pedido.cod,
        {cascade: false }
    )
    pedido?: Pedido[];

    //relacion many to one zapato a pedido
    @ManyToOne(
        () => Pedido,
        (Pedido) => Pedido.zapatos,
        {cascade: false}
    )
    pedidos?: Pedido;
}
