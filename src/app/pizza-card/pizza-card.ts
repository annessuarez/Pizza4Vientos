import { Component, input } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';

@Component({
  imports: [],
  selector: 'app-pizza-card',
  styleUrl: './pizza-card.css',
  templateUrl: './pizza-card.html',
})
export class PizzaCard {
  pizza = input.required<PizzaModel>();
}
