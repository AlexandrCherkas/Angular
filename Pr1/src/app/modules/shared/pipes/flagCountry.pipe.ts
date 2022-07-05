import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flagCountry',
})
export class FlagCountryPipe implements PipeTransform {
  transform(code: string): any {
    return `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
  }
}
