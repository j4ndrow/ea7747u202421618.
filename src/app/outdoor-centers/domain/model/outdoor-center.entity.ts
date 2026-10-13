export class OutdoorCenter {
  id: number;
  name: string
  activityType: string;
  capacity: number;
  latitude: number;
  longitude: number;

  constructor(data: { id: number; name: string; activityType: string; capacity: number; latitude: number; longitude: number }) {
    this.id = data.id;
    this.name = data.name;
    this.activityType = data.activityType;
    this.capacity = data.capacity;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
  }
}
