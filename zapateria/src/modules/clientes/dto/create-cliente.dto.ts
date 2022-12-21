import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nif: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
