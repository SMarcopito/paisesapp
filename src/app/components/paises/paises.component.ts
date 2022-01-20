import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ApiService } from 'src/app/services/api.service';
import { Paises } from '../../paises';





@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
 
})
export class PaisesComponent implements OnInit {
  text = ''
  paisbuscado: any;
  paisespages: Paises[] = []
  paises : Paises[] = [];
private readonly offset:number = 12;
private index:number = 0;

@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
numPaises = 193;
limitador = 192
  constructor(private api: ApiService,private router:Router ) {

    this.callApi();
    
    
   }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    

     if (this.paises.length == this.limitador) {
      this.showlast(event);
      return
     }
      
     if (this.paises.length >= this.numPaises) {
       event.target.disabled = true;
      
     } else {
      this.api.getApiData().subscribe(data => {
        let tamanho = this.paises.length
        for(let item = tamanho; item < tamanho+12; item++){
          console.log(item)
          this.paises.push(data[item])
        }
      })
     }
    }, 500);
  }

  showlast(event){
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    
     if (this.paises.length >= this.numPaises) {
       event.target.disabled = true;
     } else {
      this.api.getApiData().subscribe(data => {
        let tamanho = this.paises.length
        this.paises.push(data[data.length-1])
      })
     }
    }, 500);

  }

  callApi(){
    this.api.getApiData().subscribe(data => {
      this.paisespages = this.paises
      for(let item = 0; item < 12; item++){
        this.paises.push(data[item])
      }
    })
  }

 


  busca(event){


 this.text = event.target.value; 
 console.log(this.text);




// antiga barra de busca agora esta feito no pipe
    //  if(text && text.trim() != undefined){
    //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

    //        return (paises.nome.abreviado.toLowerCase().indexOf(text.toLowerCase()) > -1);
    //    })

    //  }
    //  if(text && text.trim() != ''){
    //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

    //        return (paises.nome.abreviado.toLowerCase().indexOf(text.toLowerCase()) > -1);
    //    })

    //  }

    //  if(text && text.trim() == ''){
    //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

    //        return this.paisespages;
    //    })

    //  }
  }
  
  ngOnInit() {
    this.paisbuscado = this.paises
  }
  detalhes(pais){
console.log(pais)
let navigationExtras: NavigationExtras = {
  state: {
    pais: pais
  }
 };
this.router.navigate(['detalhes'], navigationExtras)
  }

}
