import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { Paises } from '../paises';
import { ApiService } from '../services/api.service';
import { NavigationExtras, Router } from '@angular/router';



class Port {
 public id:number;
  public name:String;
  
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  text = ''
  paisbuscado: any;
  ports: Port[];
  port: Port;
  paisespages: Paises[] = []
  paises : Paises[] = [];
private readonly offset:number = 12;
private index:number = 0;

@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
numPaises = 193;
limitador = 192
  constructor(private api: ApiService,private router:Router ) {

//     this.callApi();
//     this.addpage()
    
//    }
//   loadData(event) {
//     setTimeout(() => {
//       console.log('Done');
//       event.target.complete();
    

//      if (this.paises.length == this.limitador) {
//       this.showlast(event);
//       return
//      }
      
//      if (this.paises.length >= this.numPaises) {
//        event.target.disabled = true;
      
//      } else {
//       this.api.getApiData().subscribe(data => {
//         let tamanho = this.paises.length
//         for(let item = tamanho; item < tamanho+12; item++){
//           console.log(item)
//           this.paises.push(data[item])
//         }
//       })
//      }
//     }, 500);
//   }

//   showlast(event){
//     setTimeout(() => {
//       console.log('Done');
//       event.target.complete();
    
//      if (this.paises.length >= this.numPaises) {
//        event.target.disabled = true;
//      } else {
//       this.api.getApiData().subscribe(data => {
//         let tamanho = this.paises.length
//         this.paises.push(data[data.length-1])
//       })
//      }
//     }, 500);

//   }

//   callApi(){
//     this.api.getApiData().subscribe(data => {
//       this.paisespages = this.paises
//       for(let item = 0; item < 12; item++){
//         this.paises.push(data[item])
//       }
//     })
//   }

//   addpage(){
//     this.paisespages = this.paises
//      console.log(this.paisespages)
//     this.index += this.offset

    
//     //console.log(this.paisespages) 
//   //  console.log(this.index)
//    // console.log(this.offset)
//   }


//   busca(event){


//  this.text = event.target.value; 
//  console.log(this.text);





//     //  if(text && text.trim() != undefined){
//     //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

//     //        return (paises.nome.abreviado.toLowerCase().indexOf(text.toLowerCase()) > -1);
//     //    })

//     //  }
//     //  if(text && text.trim() != ''){
//     //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

//     //        return (paises.nome.abreviado.toLowerCase().indexOf(text.toLowerCase()) > -1);
//     //    })

//     //  }

//     //  if(text && text.trim() == ''){
//     //    this.paisbuscado = this.paisbuscado.filter((paises:any)=>{

//     //        return this.paisespages;
//     //    })

//     //  }
//   }
  
//   ngOnInit() {
//     this.paisbuscado = this.paises
//   }
//   detalhes(pais){

// console.log(pais)
// let navigationExtras: NavigationExtras = {
//   state: {
//     pais: pais
//   }
//  };
// this.router.navigate(['detalhes'], navigationExtras)
//   }

  }}
