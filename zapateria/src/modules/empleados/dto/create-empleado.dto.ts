import { IsNumber, IsString } from "class-validator";

export class CreateEmpleadoDto {
    @IsNumber()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    telefono: string;
}
