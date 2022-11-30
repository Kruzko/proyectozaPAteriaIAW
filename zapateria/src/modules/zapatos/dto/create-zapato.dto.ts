import { IsNumber, IsString } from "class-validator";

export class CreateZapatoDto {
    @IsNumber()
    id: number;

    @IsString()
    tipo: string;
}
