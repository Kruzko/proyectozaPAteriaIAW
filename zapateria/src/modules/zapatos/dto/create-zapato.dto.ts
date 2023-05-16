import { IsString } from "class-validator";

export class CreateZapatoDto {
    @IsString()
    cod: string;

    @IsString()
    nombre: string;

    @IsString()
    precio: string;

    @IsString()
    thumbnailUrl: string;
    
    @IsString()
    tipo: string;
}
