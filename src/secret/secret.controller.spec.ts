import { Test, TestingModule } from '@nestjs/testing';
import { SecretController } from './secret.controller';
import { DatabaseService } from 'src/database/database.service';
import { SecretService } from './secret.service';

describe('SecretController', () => {
    let controller: SecretController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SecretController],
            providers: [
                SecretService,
                {
                    provide: DatabaseService,
                    useValue: {
                        onModuleInit: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<SecretController>(SecretController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
