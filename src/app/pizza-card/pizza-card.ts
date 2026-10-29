import { Component, input , output} from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';

@Component({
  imports: [],
  selector: 'app-pizza-card',
  styleUrl: './pizza-card.css',
  templateUrl: './pizza-card.html',
})
export class PizzaCard {
  pizza = input.required<PizzaModel>();
  cantidad: number = 1;

  pizzaAgregada = output<PizzaModel>();

  public Agregar_pizza(){
    this.pizza().cantidad = this.cantidad; //ANNE: aqui le asigna la cantidad establecida, porq por defct. tiene 1.
    this.pizzaAgregada.emit(this.pizza());
  }
}
