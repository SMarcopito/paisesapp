import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], texto: string=''): any[] {
     console.log(arr)
     if (texto === '') {
       return arr
     }

     texto = texto.toLowerCase()
      return arr.filter(item => {

        return item.nome.abreviado.toLowerCase().includes(texto) ;

     })
  
  }

}
