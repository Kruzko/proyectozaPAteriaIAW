import { IsDate, IsNumber } from "class-validator";

export class CreatePedidoDto {
    @IsNumber()
    id: number;

    @IsDate()
    fecha: Date;
}
