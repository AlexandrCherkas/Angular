import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../users/interface/user';
import { hasFlag } from 'country-flag-icons';

@Pipe({
  name: 'showGenderIcon',
})
export class ShowGenderIconPipe implements PipeTransform {
  public male: string = '../assets/images/Male.PNG';
  public female: string = '../assets/images/Female.PNG';

  transform(value: boolean): any {
    return value ? this.male : this.female;
  }
}
