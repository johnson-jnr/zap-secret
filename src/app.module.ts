import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SecretModule } from './secret/secret.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'client', 'dist'),
            exclude: ['/api/{*any}'],
        }),

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
