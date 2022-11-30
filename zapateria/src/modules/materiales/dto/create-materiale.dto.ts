import { IsNumber, IsString } from "class-validator";

export class CreateMaterialeDto {
    @IsNumber()
    id: number;

    @IsString()
    descripcion: string;
}
