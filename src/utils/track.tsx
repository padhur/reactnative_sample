import AnalyticsTracker from '../service/AnalyticsTracker';
import {TrackingData} from '../service/TrackingData';

const track = <T extends object>(key: string, data: T) => {
  AnalyticsTracker.trackAnalyticsEvent({
    metadata: TrackingData.create(key, data.toString()),
  });
};

export default track;
