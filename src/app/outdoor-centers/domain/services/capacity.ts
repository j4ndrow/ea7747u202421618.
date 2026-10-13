import {OutdoorCenter} from '../model/outdoor-center.entity';
import {Reservation} from '../model/reservation.entity';

export function totalParticipants(centerId:number, reservations:Reservation[]):number {
  return reservations.filter(r => r.outdoorCenterId === centerId).reduce((sum, r) => sum + r.participants, 0);
}

export function availableCapacity(center:OutdoorCenter, reservations:Reservation[]):number {
  return center.capacity - totalParticipants(center.id, reservations);
}

export function validParticipants(participants:number, availableCapacity:number):boolean {
  return Number.isInteger(participants) && participants > 0 && participants <= availableCapacity;
}
