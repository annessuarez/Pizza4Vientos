import { Component, input, output } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';
import {Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  pedido = input<PizzaModel[]>([]);
  metodoPago: string = "Bizum";
  telefono: string = "";
  tarjeta: string = "";
  hora: string = "";
  direccion: string = "";
  mensajeError: string = "";
  mensajeValido: string = "";

  constructor (private router: Router){
    //ANNE: así se puede navegar
  }

  public validarFormulario(): boolean{
    this.mensajeError = "";

    if (!this.hora){
      this.mensajeError = "Introduzca hora de entrega válida."
      return false;
    }

    if (!this.direccion){
      this.mensajeError = "Introduzca dirección completa de reparto."
      return false;
    }

    if(this.metodoPago == 'Bizum'){
      const exRegularTelefono = /^[0-9]{9}$/;

      if (!exRegularTelefono.test(this.telefono)){
        this.mensajeError= "Introduzca un número de teléfono válido."
        return false;
      }
    }else if (this.metodoPago == 'Tarjeta'){
      const exRegularTarjeta = /^[0-9]{16}$/;

      if (!exRegularTarjeta.test(this.tarjeta)){
        this.mensajeError= "Introduzca un número de tarjeta válido."
        return false;
      }
    }

    return true;
  }

  public realizarPago(){
    if (!this.validarFormulario()){
      //ANNE: si hay algun fallo se para.
      return;
    }

    this.pedido().length = 0;
    this.mensajeError = "";
    this.mensajeValido = "¡Muchas gracias por su compra! Su pedido está en camino.";
    this.telefono = "";
    this.tarjeta = "";
    this.hora = "";
    this.direccion = "";

    //ANNE: el setTimeOut se usa para ponerle un tiempo y luego hacer otra accion
    setTimeout(() =>{
      this.router.navigate(['/pizzas']);
    }, 4000);

  }

}
