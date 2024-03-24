export class TrackingData {
  private _trackingMap: Map<string, any>;

  constructor(data?: Map<string, any>) {
    this._trackingMap = data || new Map<string, any>();
  }

  static create(key: string, value: string): TrackingData {
    const trackingData = new TrackingData();
    trackingData.put(key, value);
    return trackingData;
  }

  get(): Map<string, any> {
    return this._trackingMap;
  }

  put(key: string, value: any): TrackingData {
    if (value.toString().length > 0) {
      this._trackingMap.set(key, value.toString());
    }
    return this;
  }
}

export default new TrackingData();
