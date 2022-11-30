import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Zapato {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    tipo: string;
}
