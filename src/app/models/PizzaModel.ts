export class PizzaModel{
    nombre: string;
    precio: number;
    imagen: string;
    ingredientes: string;

    constructor(nombre: string, precio:number ,imagen: string, ingredientes: string) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
}