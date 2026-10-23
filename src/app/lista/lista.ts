import { Component } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel'; //hay que importar el modelo creado

@Component({
  imports: [],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {
  pizzas: PizzaModel[] = []; //es lo mismo que hacer en java List<PizzaModel> pizzas = new ArrayList<>;

  constructor() {
    
  }

}
