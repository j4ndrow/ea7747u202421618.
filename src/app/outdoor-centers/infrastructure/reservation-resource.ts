export interface ReservationResource {
  outdoorCenterId: number; activityType: string; participantName: string; participants: number;
  weatherTemperature: number; reservedAt: string;
}

export interface ReservationResponse extends ReservationResource {id: number;}
