import { Test, TestingModule } from '@nestjs/testing';
import { SecretService } from './secret.service';
import { DatabaseService } from 'src/database/database.service';

describe('SecretService', () => {
    let service: SecretService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
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

        service = module.get<SecretService>(SecretService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
