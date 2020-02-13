import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(toFilter: Object[], searchString: string): Object[] {
    searchString = searchString.toLowerCase();
    
    let filtered: Object[] = toFilter.filter(obj =>
      {
        return obj['username'].toLowerCase().includes(searchString)
        || obj['title'].toLowerCase().includes(searchString)
      })
      return filtered;
  }

}
