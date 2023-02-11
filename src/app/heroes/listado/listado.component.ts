import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

cazadores     : string[]=['Tanjiro','Nezuko','Rengoku','Tokitou'];
cazadorBorrado: string='';

borrarCazador(){
// Borrar el primer Elemenyo (shift) y lo retorna
this.cazadorBorrado= this.cazadores.shift() || '';


}


}
