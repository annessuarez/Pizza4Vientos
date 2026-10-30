import { Component, input } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  pedido = input<PizzaModel[]>([]);
}
