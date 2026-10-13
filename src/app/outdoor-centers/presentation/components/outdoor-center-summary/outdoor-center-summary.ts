import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { OutdoorCenter } from '../../../domain/model/outdoor-center.entity';
import { Reservation } from '../../../domain/model/reservation.entity';
import { availableCapacity, totalParticipants } from '../../../domain/services/capacity';

@Component({ selector: 'app-outdoor-center-summary', imports: [MatCardModule, MatListModule, TranslatePipe],
  templateUrl: './outdoor-center-summary.html', styleUrl: './outdoor-center-summary.css' })
export class OutdoorCenterSummary {
  readonly center = input.required<OutdoorCenter>();
  readonly reservations = input.required<Reservation[]>();
  readonly items = computed(() => this.reservations().filter(r => r.outdoorCenterId === this.center().id));
  readonly total = computed(() => totalParticipants(this.center().id, this.reservations()));
  readonly available = computed(() => availableCapacity(this.center(), this.reservations()));
}
