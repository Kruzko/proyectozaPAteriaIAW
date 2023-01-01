import { IsString } from "class-validator";

export class CreatePedidoDto {
    @IsString()
    cod: string;

    @IsString()
    fecha: string;
}
