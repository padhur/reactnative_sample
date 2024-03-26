import {TrackingData} from './TrackingData';

export class AnalyticsTracker {
  private static _analyticsTracker: AnalyticsTracker | null = null;

  // private constructor() {}

  public static initialise(): AnalyticsTracker {
    // we can init the multiple tracking sdks
    return (this._analyticsTracker ??= new AnalyticsTracker());
  }

  public trackAnalyticsEvent({metadata}: {metadata: TrackingData}): void {
    // Call the track
    console.log(
      '>>>>>  ~ AnalyticsTracker ~ trackAnalyticsEvent ~ metadata:',
      metadata,
    );
  }
}

export default new AnalyticsTracker();
