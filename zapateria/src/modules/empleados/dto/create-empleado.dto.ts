import { IsNumber, IsString } from "class-validator";

export class CreateEmpleadoDto {
    @IsString()
    nif: string;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
