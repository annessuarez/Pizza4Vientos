export class PizzaModel{
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    ingredientes: string[];

    constructor(id: number, nombre: string, precio:number ,imagen: string, ingredientes: string[]) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
}