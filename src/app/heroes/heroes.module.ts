import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({

declarations:[
HeroeComponent,
ListadoComponent
],
exports:[
    // Se exportan lo que sera visto a fuera de este modulo
    ListadoComponent
],

imports:[
    // Se utiliza para usar los componentes de Angular
CommonModule


]


})
export class HeroesModule{


}