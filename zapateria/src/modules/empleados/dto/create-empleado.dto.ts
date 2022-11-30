import { IsNumber, IsString } from "class-validator";

export class CreateEmpleadoDto {
    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
