import { IsString } from "class-validator";

export class CreateZapatoDto {
    @IsString()
    nif: string;

    @IsString()
    tipo: string;
}
