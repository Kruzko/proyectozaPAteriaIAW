import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('date')
    fecha: Date;
}
