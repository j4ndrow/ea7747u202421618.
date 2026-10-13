import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Endpoint } from '../../shared/infrastructure/endpoint';
import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { OutdoorCenterResource } from './outdoor-center-resource';
import { OutdoorCenterAssembler } from './outdoor-center-assembler';

@Injectable({ providedIn: 'root' })
export class OutdoorCenterApi {
  private http = inject(HttpClient);
  private endpoint = new Endpoint(environment.apiUrl, environment.outdoorCentersPath);
  getAll(): Observable<OutdoorCenter[]> {
    return this.http.get<OutdoorCenterResource[]>(this.endpoint.url).pipe(map(items => items.map(OutdoorCenterAssembler.toEntity)));
  }
}
