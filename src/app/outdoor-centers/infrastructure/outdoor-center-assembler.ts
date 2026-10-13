import { OutdoorCenter } from '../domain/model/outdoor-center.entity';
import { OutdoorCenterResource } from './outdoor-center-resource';

export class OutdoorCenterAssembler {
  static toEntity(resource: OutdoorCenterResource): OutdoorCenter { return new OutdoorCenter(resurce); }
}
