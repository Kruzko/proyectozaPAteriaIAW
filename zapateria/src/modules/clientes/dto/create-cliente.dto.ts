import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
