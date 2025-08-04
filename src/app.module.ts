import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SecretModule } from './secret/secret.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`,
        }),
        DatabaseModule,
        SecretModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
