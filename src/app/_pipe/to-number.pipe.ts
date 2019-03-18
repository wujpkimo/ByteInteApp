import { Pipe, PipeTransform } from '@angular/core';

/* 增加千分號Pipe */

@Pipe({
  name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
