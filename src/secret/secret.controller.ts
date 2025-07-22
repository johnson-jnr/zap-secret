import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SecretService } from './secret.service';
import { StoreSecretDto } from './dto/store-secret-dto';

@Controller('secret')
export class SecretController {
    constructor(private readonly secretService: SecretService){}
    @Post()
    async store(@Body() payload: StoreSecretDto) {
       return await this.secretService.store(payload);
    } 

    @Get('/:id')
    async getSecret(@Param('id') id: string) {
        return await this.secretService.get(id);
    }
   
}
