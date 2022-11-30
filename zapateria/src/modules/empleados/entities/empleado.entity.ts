import { Zapato } from "src/modules/zapatos/entities/zapato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;

    @OneToMany(
        () => Zapato,
        (Zapato) => Zapato.id,
        {cascade: false}
    )
    zapato?: Zapato[];

    
}
