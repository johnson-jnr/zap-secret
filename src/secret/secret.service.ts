import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { StoreSecretDto } from './dto/store-secret-dto';
import { aesEncrypt, aesDecrypt } from 'src/crypto/aes';
import * as crypto from 'crypto';

@Injectable()
export class SecretService {
    private readonly logger = new Logger(SecretService.name);

    constructor(private readonly prisma: DatabaseService){}

    async store(payload: StoreSecretDto) {
        const hash = crypto.createHash('sha256').update(payload.secret).digest('hex');
        const cipherText = aesEncrypt(payload.secret);

        const secret = await this.prisma.secret.create({
            data: {
                hash,
                cipherText
            }
        });

        this.logger.log('Hashed stored successfully');

        return {
            success: true
        }
    }
}
