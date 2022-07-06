import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flagCountry',
})
export class FlagCountryPipe implements PipeTransform {
  transform(code: string): string {
    return `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
  }
}
