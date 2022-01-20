import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PaisesComponent } from './paises.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
 
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
    
  ],
   declarations: [PaisesComponent],
   exports:[PaisesComponent]
})
export class PaisesModule { }
