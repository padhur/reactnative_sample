import { AnalyticsTracker } from '../service/AnalyticsTracker';

class AppModule {

  public initialise(): void {
      /// Initialise AnalyticsTracker
    AnalyticsTracker.initialise();
  }
}

export default new AppModule();