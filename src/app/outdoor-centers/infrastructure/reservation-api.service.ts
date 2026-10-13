import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Endpoint } from '../../shared/infrastructure/endpoint';
import { CreateReservationRequest, Reservation } from '../domain/model/reservation.entity';
import { ReservationAssembler } from './reservation-assembler';
import { ReservationResource } from './reservation-resource';

@Injectable({ providedIn: 'root' })
export class ReservationApi {
  private http = inject(HttpClient);
  private endpoint = new Endpoint(environment.apiUrl, environment.reservationsPath);
  getAll(): Observable<Reservation[]> {
    return this.http.get<ReservationResource[]>(this.endpoint.url).pipe(map(items => items.map(ReservationAssembler.toEntity)));
  }
  create(request: CreateReservationRequest): Observable<Reservation> {
    return this.http.post<ReservationResource>(this.endpoint.url, ReservationAssembler.toResource(request)).pipe(map(ReservationAssembler.toEntity));
  }
}
