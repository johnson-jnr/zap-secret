
import { IsNotEmpty, IsString } from 'class-validator';

export class StoreSecretDto {
    @IsString()
    @IsNotEmpty()
    text: string
}