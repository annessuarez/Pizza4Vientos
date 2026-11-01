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
  metodoPago: string = "";
  telefono: string = "";
  tarjeta: string = "";
  hora: string = "";
  direccion: string = "";
  mensajeError: string[] = [];
  mensajeValido: string = "";

  constructor (private router: Router){
    //ANNE: así se puede navegar
  }

  public validarFormulario(): boolean {
    this.mensajeError = [];

    if (!this.hora){
      this.mensajeError.push("Introduzca hora de entrega válida.")
    }

    if (!this.direccion){
      this.mensajeError.push("Introduzca dirección completa de reparto.")
    }

    if(this.metodoPago == 'Bizum'){
      const exRegularTelefono = /^[0-9]{9}$/;

      if (!exRegularTelefono.test(this.telefono)){
        this.mensajeError.push("Introduzca un número de teléfono válido.")
      }

    }else if (this.metodoPago == 'Tarjeta'){
      const exRegularTarjeta = /^[0-9]{16}$/;

      if (!exRegularTarjeta.test(this.tarjeta)){
        this.mensajeError.push("Introduzca un número de tarjeta válido.")
      }
    }

    return this.mensajeError.length == 0; //ANNE: si no hay errores devulve true
  }

  public realizarPago(){
    if (!this.validarFormulario()){
      //ANNE: validarFormulario da false, esq hay errores y se para.
      return;
    }

    //ANNE: si llega aquí esq no hay errores
    this.pedido().length = 0;
    this.mensajeError = [];
    this.mensajeValido = "¡Muchas gracias por su compra! Su pedido está en camino.";
    this.telefono = "";
    this.tarjeta = "";
    this.hora = "";
    this.direccion = "";

    //ANNE: el setTimeOut se usa para ponerle un tiempo y luego hacer otra accion
    setTimeout(() =>{
      this.router.navigate(['/pizzas']);
    }, 3000);

  }

  public limpiarFormulario(){
    this.pedido().length = 0;
    this.mensajeError = [];
    this.mensajeValido = "";
    this.telefono = "";
    this.tarjeta = "";
    this.hora = "";
    this.direccion = "";

    //ANNE: resetea los componentes visuales del fomulario
    const form = document.getElementById('pedido') as HTMLFormElement;
    if (form) form.reset();
  }

}
