import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../users/interface/user';

@Pipe({
  name: 'formatUsername',
})
export class FormatUsernamePipe implements PipeTransform {
  transform(value: IUser): string {
    return `${value.title}  ${value.name} ${value?.secondName}`;
  }
}
