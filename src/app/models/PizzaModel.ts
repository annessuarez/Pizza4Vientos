export class PizzaModel{
    nombre: string;
    precio: number;
    imagen: string;
    ingredientes: string;
    cantidad? : number;

    constructor(nombre: string, precio:number ,imagen: string, ingredientes: string, cantidad: number = 1) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.cantidad = cantidad;
    }
}