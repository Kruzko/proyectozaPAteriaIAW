import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    cod:string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    usuario: string;

    //relacion one to one con cliente

    @OneToOne(
        () => Cliente,
        (Cliente) => Cliente.perfil
    )
    @JoinColumn()
    cliente?: Cliente;

    @Column('bool', { default: true })
    isActive: boolean;
}
