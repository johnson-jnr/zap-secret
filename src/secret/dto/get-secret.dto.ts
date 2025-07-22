
import { IsNotEmpty, IsString } from 'class-validator';

export class GetSecretDto {
    @IsString()
    @IsNotEmpty()
    id: string
}