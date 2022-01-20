import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';



import { HomePageRoutingModule } from './home-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from '../pipes/pipes.module';
import { PaisesModule } from '../components/paises/paises.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicSelectableModule,
    PipesModule,
    PaisesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
