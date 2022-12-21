import { IsString } from "class-validator";

export class CreateMaterialeDto {
    @IsString()
    nif: string;

    @IsString()
    descripcion: string;
}
