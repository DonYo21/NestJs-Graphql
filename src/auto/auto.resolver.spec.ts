import { Test, TestingModule } from '@nestjs/testing';
import { AutoResolver } from './auto.resolver';

describe('AutoResolver', () => {
  let resolver: AutoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoResolver],
    }).compile();

    resolver = module.get<AutoResolver>(AutoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
