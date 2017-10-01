import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * Gets Called when the pipe is being called.
   * 
   * @param {object[]} unfiltered An Object Array of Values
   * @param {{}} [filter] The Filter Object
   * @returns {object[]} the Array of filtered Values 
   * @memberof FilterPipe
   */
  transform(unfiltered: object[], filter?: {}): any {
    if (typeof unfiltered === 'undefined' || typeof filter === 'undefined' || unfiltered == null) return unfiltered;
    const filterProps = Object.keys(filter);
    return _.filter(unfiltered, (unfilteredElement) => {
      return _.reduce(unfilteredElement, (isVisible, objValue, currentProp) =>
        filterProps.indexOf(currentProp) < 0 || typeof filter[currentProp] === 'undefined' ?
          isVisible : objValue.toString().indexOf(filter[currentProp]) > -1
        , true);
    })
  }

}
