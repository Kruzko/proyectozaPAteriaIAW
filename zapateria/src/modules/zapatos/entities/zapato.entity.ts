import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
