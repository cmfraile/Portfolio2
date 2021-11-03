import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesespie'
})
export class MesespiePipe implements PipeTransform {

  transform(value:number):string{
    let caso!:string;
    const data = {year:Math.round(value/12),meses:value%12};
    if(data.year && !data.meses){
      if(data.year == 1){caso = "1 año"}else{caso = `${data.year} años`};
    };
    if(!data.year && data.meses){
      if(data.meses == 1){caso = "1 mes"}else{caso = `${data.meses} meses`};
    }
    if(data.year && data.meses){
      caso = `${data.year} año${(data.year !== 1) ? 's' : ''} y ${data.meses} mes${(data.meses !== 1) ? 'es' : ''}`
    }
    return caso;
  }

}
