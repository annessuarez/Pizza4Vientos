import { Component, input, effect, output } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel'; //hay que importar el modelo creado
import { PizzaCard } from '../pizza-card/pizza-card';

@Component({
  imports: [PizzaCard],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {
  filtro = input('');
  pizzasFiltradas: PizzaModel[] = [];
  carrito: PizzaModel[] = [];
  pedido = output<PizzaModel[]>(); //ANNE: para conectarlo con APP

  constructor() {
    //ANNE: para que la ppágina no empiece vacía
    this.pizzasFiltradas = this.pizzas;

    effect(() => {
      this.obtener_pizzas(this.filtro());
    });
  }
  
  //TODO: repasar esta función
  public obtener_pizzas(buscado: string) {
    this.pizzasFiltradas = [];
    for (let p of this.pizzas) {
      if (p.ingredientes.toLowerCase().includes(buscado.toLowerCase())) {
        this.pizzasFiltradas.push(p);
      }
    }
  }

  //ANNE: método para actualizar el pedido
  public recibir_pizzas(obtenida: PizzaModel){
    this.carrito.push(obtenida);
    this.pedido.emit(this.carrito);
  }

  pizzas: PizzaModel[] = [
    // ANNE: es lo mismo que hacer en java List<PizzaModel> pizzas = new ArrayList<>;
    {
      nombre: 'MARGARITA',
      imagen: '1.png',
      precio: 10.5,
      ingredientes: 'Salsa de tomate, queso mozzarella, albahaca fresca',
    },
    {
      nombre: 'PROSCIUTTO',
      imagen: '2.png',
      precio: 12.0,
      ingredientes: 'Salsa de tomate, queso mozzarella, jamón cocido, champiñones',
    },
    {
      nombre: 'CUATRO QUESOS',
      imagen: '3.png',
      precio: 13.5,
      ingredientes: 'Queso mozzarella, gorgonzola, parmesano, queso de cabra',
    },
    {
      nombre: 'PEPPERONI',
      imagen: '4.png',
      precio: 12.5,
      ingredientes: 'Salsa de tomate, queso mozzarella, pepperoni picante',
    },
    {
      nombre: 'BARBACOA',
      imagen: '5.png',
      precio: 13.0,
      ingredientes: 'Salsa barbacoa, queso mozzarella, carne picada, bacon, cebolla',
    },
    {
      nombre: 'HAWAIANA',
      imagen: '6.png',
      precio: 11.5,
      ingredientes: 'Salsa de tomate, queso mozzarella, jamón cocido, piña',
    },
    {
      nombre: 'VEGETARIANA',
      imagen: '7.png',
      precio: 12.0,
      ingredientes:
        'Salsa de tomate, pimiento verde, pimiento rojo, cebolla',
    },
    {
      nombre: 'CARBONARA',
      imagen: '8.png',
      precio: 13.0,
      ingredientes: 'Nata fresca, queso mozzarella, bacon, champiñones, pimienta negra',
    },
  ];
}
