import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesespie'
})
export class MesespiePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
