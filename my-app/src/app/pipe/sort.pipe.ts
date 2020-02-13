import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{

    transform(values: Object[], sortBy: string): Object[]{
        let sorted = values.sort((a, b) => {
            if(isNaN(a[sortBy])){
                if(a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                    return 1;
                }
                if(a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                    return -1
                }
                return 0;
            }
            else{
                return a[sortBy] > b[sortBy] ? 1 : -1;
            }
        })
        return sorted;
    }
}