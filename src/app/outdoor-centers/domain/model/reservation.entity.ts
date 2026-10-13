export interface CreateReservationRequest {
  outdoorCenterId: number;
  activityType: string;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reservedAt: string;
}

export interface CreateReservationResponse extends CreateReservationRequest { id: number; }

export class Reservation implements CreateReservationResponse {
  id: number;
  outdoorCenterId: number;
  activityType: string;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reservedAt: string;

  constructor(data: CreateReservationResponse) {
    this.id = data.id; this.outdoorCenterId = data.outdoorCenterId;
    this.activityType = data.activityType; this.participantName = data.participantName;
    this.participants = data.participants; this.weatherTemperature = data.weatherTemperature;
    this.reservedAt = data.reservedAt;
  }
}
