import { IsString } from "class-validator";

export class CreateMaterialeDto {
    @IsString()
    id: string;

    @IsString()
    descripcion: string;
}
