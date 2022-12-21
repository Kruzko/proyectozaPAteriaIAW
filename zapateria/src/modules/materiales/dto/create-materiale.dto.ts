import { IsString } from "class-validator";

export class CreateMaterialeDto {
    @IsString()
    cod: string;

    @IsString()
    descripcion: string;
}
