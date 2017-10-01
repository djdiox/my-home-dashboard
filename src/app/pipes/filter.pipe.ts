import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filter?: {}): any {
    if (typeof value === 'undefined' || typeof filter === 'undefined' || value == null) return value;
    const filters = Object.keys(filter);
    return _.filter(value, (current) => {
      return _.reduce(current, (result, value, prop) => {
        if(filters.indexOf(prop) < 0 || typeof filter[prop] === 'undefined') return result;
        result = value.toString().indexOf(filter[prop]) > -1;
        return result;
      }, true);
    })
  }

}
