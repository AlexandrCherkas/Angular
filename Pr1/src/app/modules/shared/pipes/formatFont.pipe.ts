import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../users/interface/user';

@Pipe({
  name: 'showGenderIcon',
})
export class ShowGenderIconPipe implements PipeTransform {
  public male: string = '../assets/images/Male.PNG';
  public female: string = '../assets/images/Female.PNG';

  transform(value: boolean): string {
    return value ? this.male : this.female;
  }
}
