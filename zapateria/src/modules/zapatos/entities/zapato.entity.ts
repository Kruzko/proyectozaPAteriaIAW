import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Zapato {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
        (Pedido) => Pedido.id,
        {cascade: false }
    )
    pedido?: Pedido[];
}
