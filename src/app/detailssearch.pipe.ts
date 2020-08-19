import { Pipe, PipeTransform } from '@angular/core';
import { AddressDetails } from 'src/address-details';

@Pipe({
  name: 'detailssearch'
})
export class DetailssearchPipe implements PipeTransform {

  transform(value: AddressDetails[], searchbar: string, ...args: unknown[]): unknown {
    if(searchbar){
      let regex= new RegExp(searchbar, 'gi');;
      value = value.map(x=>{
        if(x.address.match(regex)||x.city.match(regex)||x.state.match(regex)){
          let set = new Set(searchbar.split(""));
          set.forEach(y=>{
            x.frequency = (x.address.match(new RegExp(y, "gi")) || []).length + 3* ((x.state.match(new RegExp(y, "gi")) || []).length) + (2* (x.city.match(new RegExp(y, "gi")) || []).length);
          })
          return x;
        }
      })
    }
    return value;
  }
}
