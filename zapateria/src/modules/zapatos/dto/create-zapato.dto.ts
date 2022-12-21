import { IsString } from "class-validator";

export class CreateZapatoDto {
    @IsString()
    cod: string;

    @IsString()
    tipo: string;
}
