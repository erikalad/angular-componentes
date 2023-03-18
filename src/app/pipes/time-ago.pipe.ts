import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns'
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {//value=  QUE RECIBO: QUE DEVUELVO.
    return formatDistance(new Date(), value);
  }

}
