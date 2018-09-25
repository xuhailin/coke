import { RoutesModule } from './routes.module';

describe('RoutersModule', () => {
  let routesModule: RoutesModule;

  beforeEach(() => {
    routesModule = new RoutesModule();
  });

  it('should create an instance', () => {
    expect(routesModule).toBeTruthy();
  });
});
