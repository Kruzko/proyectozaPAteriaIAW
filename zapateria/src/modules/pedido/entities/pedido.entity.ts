import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('date')
    fecha: Date;
}
