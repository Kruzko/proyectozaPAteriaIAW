import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido: string;

    @Column('text')
    telefono: string;
}
