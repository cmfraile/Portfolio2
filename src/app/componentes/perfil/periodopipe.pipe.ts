import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodopipe'
})
export class PeriodopipePipe implements PipeTransform {

  transform(valor:[number,number|null]):string{
    console.log(valor);
    if(valor[1] == null){return `${valor[0]}`}else{return `${valor[0]} - ${valor[1]}`}
  }

}
