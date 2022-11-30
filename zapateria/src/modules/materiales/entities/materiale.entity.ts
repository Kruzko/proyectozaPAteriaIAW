import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materiale {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    descripcion: string;
}
