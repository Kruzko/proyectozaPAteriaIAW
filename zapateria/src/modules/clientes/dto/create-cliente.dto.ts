import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nif: string;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
