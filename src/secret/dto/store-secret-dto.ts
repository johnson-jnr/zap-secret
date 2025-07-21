
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class StoreSecretDto {
    @IsString()
    @IsNotEmpty()
    secret: string

    @IsString()
    @IsOptional()
    expire: string
}