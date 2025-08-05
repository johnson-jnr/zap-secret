import {
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
} from 'class-validator';
export class StoreSecretDto {
    @IsString()
    @MaxLength(2048)
    @IsNotEmpty()
    secret: string;

    @IsNumber()
    @IsIn([1, 6, 12])
    expiryHour: number;
}
