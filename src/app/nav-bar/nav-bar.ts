import { Component, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html'
})
export class NavBar {
  buscarIngrediente = "";
  cambiarPagina = output<string>();

  busqueda = output<string>();
  public Buscar_ingrediente(){
    //ANNE: le pasa el texto de la busqueda al padre, es la unión entre el NAV -> APP -> LISTA DEL PIZZAS 
    this.busqueda.emit(this.buscarIngrediente);
  }
}
