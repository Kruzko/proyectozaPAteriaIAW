import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
