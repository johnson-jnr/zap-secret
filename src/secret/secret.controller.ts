import { Body, Controller, Post } from '@nestjs/common';
import { SecretService } from './secret.service';
import { StoreSecretDto } from './dto/store-secret-dto';

@Controller('secret')
export class SecretController {
    constructor(private readonly secretService: SecretService){}
    @Post()
    async store(@Body() payload: StoreSecretDto) {
        this.secretService.store(payload);
    } 
}
