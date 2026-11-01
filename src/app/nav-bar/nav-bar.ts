import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',

})
export class NavBar {
  buscarIngrediente = "";
  busqueda = output<string>();
  cambiarPagina = output<string>(); //ANNE: es necesario para cambiar entre ppantallas

  
  
  public Buscar_ingrediente(){
    //ANNE: le pasa el texto de la busqueda al padre, es la unión entre el NAV -> APP -> LISTA DEL PIZZAS 
    this.busqueda.emit(this.buscarIngrediente);
  }
}
