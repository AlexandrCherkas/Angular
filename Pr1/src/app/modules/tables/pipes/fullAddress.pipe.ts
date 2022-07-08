import { Pipe, PipeTransform } from '@angular/core';
import { ITableAddress } from '../../tables/interfaces/ITableAddress';

@Pipe({
  name: 'fullAddress',
})
export class FullAddressPipe implements PipeTransform {
  transform(value: ITableAddress): string {
    return `, Street: ${value.street} : ${value.number}`;
  }
}
