import { Pipe, PipeTransform } from '@angular/core';
import { func } from './funcs';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: func[], input: string): any {
    if (input) {
      return value.filter(
        (val) => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    } else return value;
  }
}
