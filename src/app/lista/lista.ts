import { Component, model } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel'; //hay que importar el modelo creado
import { PizzaCard } from '../pizza-card/pizza-card';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  imports: [PizzaCard],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})

export class Lista {
  //TODO: terinar ejercicio 3
  public obtener_pizzas(buscado:string){
    pizzasFiltradas: PizzaModel[] = this.pizzas;
    for (let p of this.pizzas){
      if (p.ingredientes.toLowerCase().includes(buscado.toLowerCase())){
        pizzasFiltradas.
      }
    }

  }

  pizzas: PizzaModel[] = [ // ANNE: es lo mismo que hacer en java List<PizzaModel> pizzas = new ArrayList<>;
  {
    nombre: "Margarita",
    imagen: "1.png",
    precio: 10.5,
    ingredientes: "Salsa de tomate, queso mozzarella, albahaca fresca"
  },
  {
    nombre: "Prosciutto",
    imagen: "2.png",
    precio: 12.0,
    ingredientes: "Salsa de tomate, queso mozzarella, jamón cocido, champiñones"
  },
  {
    nombre: "CuatroQuesos",
    imagen: "3.png",
    precio: 13.5,
    ingredientes: "Queso mozzarella, gorgonzola, parmesano, queso de cabra"
  },
  {
    nombre: "Pepperoni",
    imagen: "4.png",
    precio: 12.5,
    ingredientes: "Salsa de tomate, queso mozzarella, pepperoni picante"
  },
  {
    nombre: "Barbacoa",
    imagen: "1.png",
    precio: 13.0,
    ingredientes: "Salsa barbacoa, queso mozzarella, carne picada, bacon, cebolla"
  },
  {
    nombre: "Hawaiana",
    imagen: "2.png",
    precio: 11.5,
    ingredientes: "Salsa de tomate, queso mozzarella, jamón cocido, piña"
  },
  {
    nombre: "Vegetariana",
    imagen: "3.png",
    precio: 12.0,
    ingredientes: "Salsa de tomate, queso mozzarella, pimiento verde, pimiento rojo, cebolla, aceitunas negras"
  },
  {
    nombre: "Carbonara",
    imagen: "4.png",
    precio: 13.0,
    ingredientes: "Nata fresca, queso mozzarella, bacon, champiñones, pimienta negra"
  }
  ]; 

  

}
