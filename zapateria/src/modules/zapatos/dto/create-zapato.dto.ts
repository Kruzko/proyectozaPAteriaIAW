import { IsString } from "class-validator";

export class CreateZapatoDto {
    @IsString()
    id: string;

    @IsString()
    tipo: string;
}
