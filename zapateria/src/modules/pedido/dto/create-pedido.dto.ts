import { IsDate, IsDateString, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsString()
    cod: string;

    @IsDate()
    fecha: Date;
}
