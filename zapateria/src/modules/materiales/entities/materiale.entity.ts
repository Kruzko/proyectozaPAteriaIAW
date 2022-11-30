import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materiale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    descripcion: string;
}
