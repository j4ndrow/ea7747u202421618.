import { inject, Injectable, signal } from '@angular/core';
import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { Reservation } from '../domain/model/reservation.entity';
import { OutdoorCenterApi } from '../infrastructure/outdoor-center-api.service';
import { ReservationApi } from '../infrastructure/reservation-api.service';

@Injectable({ providedIn: 'root' })
export class OutdoorCentersStore {
  private centerApi = inject(OutdoorCenterApi);
  private reservationApi = inject(ReservationApi);
  private _centers = signal<OutdoorCenter[]>([]);
  private _reservations = signal<Reservation[]>([]);
  private _loading = signal(false);
  private _saving = signal(false);
  private _error = signal('');
  readonly centers = this._centers.asReadonly();
  readonly reservations = this._reservations.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly saving = this._saving.asReadonly();
  readonly error = this._error.asReadonly();

  load(): void {
    this._loading.set(true);
    this._error.set('');
    this.centerApi.getAll().subscribe({
      next: centers => {
        this._centers.set(centers);
        this.reservationApi.getAll().subscribe({
          next: reservations => {
            this._reservations.set(reservations);
            this._loading.set(false);
          },
          error: () => {
            this._error.set('load-error');
            this._loading.set(false);
          },
        });
      },
      error: () => {
        this._error.set('load-error');
        this._loading.set(false);
      },
    });
  }
}
