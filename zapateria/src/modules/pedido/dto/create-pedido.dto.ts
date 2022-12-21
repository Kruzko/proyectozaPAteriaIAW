import { IsDate, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsString()
    nif: string;

    @IsDate()
    fecha: Date;
}
