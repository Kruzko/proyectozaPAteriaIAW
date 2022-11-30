import { IsDate, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsString()
    id: string;

    @IsDate()
    fecha: Date;
}
