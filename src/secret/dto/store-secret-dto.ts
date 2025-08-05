import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class StoreSecretDto {
    @IsString()
    @IsNotEmpty()
    secret: string;

    @IsNumber()
    @IsIn([1, 6, 12])
    expiryHour: number;
}
