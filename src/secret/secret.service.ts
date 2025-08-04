import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { StoreSecretDto } from './dto/store-secret-dto';
import { aesEncrypt, aesDecrypt } from 'src/crypto/aes';
import { ObjectId } from 'bson';
import * as crypto from 'crypto';
import { hoursToMs } from 'utils';

@Injectable()
export class SecretService {
    private readonly logger = new Logger(SecretService.name);

    constructor(private readonly prisma: DatabaseService) {}

    async store(payload: StoreSecretDto) {
        const hash = crypto
            .createHash('sha256')
            .update(payload.secret)
            .digest('hex');
        const cipherText = aesEncrypt(payload.secret);
        const expiresInMs = hoursToMs(payload.expiryHour);

        const secret = await this.prisma.secret.create({
            data: {
                hash,
                cipherText,
                expiresAt: new Date(Date.now() + expiresInMs),
            },
        });

        this.logger.log('Secret encrypted successfully');

        return {
            success: true,
            id: secret.id,
        };
    }

    async get(id: string) {
        if (!ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid Secret ID provided');
        }

        const secret = await this.prisma.secret.findUnique({
            where: {
                id,
            },
        });
        if (!secret) {
            throw new NotFoundException('Secret Not Found.');
        }

        if (secret.expiresAt && secret.expiresAt.getTime() < Date.now()) {
            throw new ForbiddenException('Expiry period has elapsed');
        }

        if (secret.burnedAt) {
            throw new ForbiddenException('Secret has already been viewed');
        }

        const originalText = aesDecrypt(secret.cipherText);
        if (!originalText) {
            throw new InternalServerErrorException(
                'There was a problem with the decryption',
            );
        }

        await this.prisma.secret.update({
            data: {
                burnedAt: new Date(),
            },
            where: {
                id,
            },
        });

        this.logger.log('Secret decrypted successfully');

        return {
            success: true,
            text: originalText,
        };
    }
}
