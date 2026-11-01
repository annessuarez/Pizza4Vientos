import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import {Header} from './header/header';
import { Lista } from './lista/lista';
import { Formulario } from './formulario/formulario';
import { Footer } from './footer/footer';
import { PizzaModel } from './models/PizzaModel';

@Component({
  imports: [RouterOutlet, NavBar, Header, Lista, Formulario, Footer],  
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('4VPizza_AnneSuarez');
  textoFiltro = signal("");
  pizzasPedidas = signal<PizzaModel[]>([]);
  paginaActual = signal('pizzas');
}
