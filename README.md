# 4VPizzaAnneSuarez

Aplicación web interactiva desarrollada para la gestión y pedido de pizzas en línea. 

Este proyecto está construido con **Angular CLI** (versión 22.2.1), **TypeScript** y **Bootstrap 5 / SCSS**.

Los comentarios marcados con **`ANNE`** se deben omitir, ya que son notas internas / observaciones previas que no afectan a la versión final. 

---
## Componentes Principales
- **`Header`**: Cabecera visual de la aplicación con el nombre y el logo de 4V Pizza.
- **`Navbar`**: Barra de navegación que incluye:
  * Buscador interactivo de pizzas por ingredientes.
  * Emisión del término de búsqueda hacia el listado mediante `@Output`.
  * Enlaces de navegación rápida (*Ver pizzas* y *Realizar pedido*).
- **`Lista de Pizzas`**: Contenedor principal del catálogo que gestiona la lógica de visualización:
  * Modelo de datos en TypeScript definido como un array (`[]`) con la colección de pizzas.
  * Manejo interno de dos estados: lista completa y lista filtrada.
  * Recepción del filtro mediante `@Input`.
  * Refresco automático de la pantalla al modificarse la lista filtrada.
  * Iteración de la lista para renderizar y pasar parámetros a los componentes hijos (`Card de Pizza`).
- **`Card de Pizza`**: Componente individual e independiente generado dinámicamente mediante iteración del listado para mostrar:
  * Cabecera con título y precio del producto.
  * Imagen visual de la pizza.
  * Listado detallado de ingredientes.
  * Recepción de los parámetros necesarios de cada pizza desde el componente padre.
- **`Formulario de Pedido`**: Componente desarrollado con Angular para la gestión y tramitación del pedido:
  * Selección de la hora de entrega deseada.
  * Entrada de la dirección de envío.
  * Selección interactiva del método de pago (Bizum o Tarjeta).
- **`Footer`**: Pie de página estático con información corporativa y créditos de la aplicación.

---

## Responsive Design
* **Grid Adaptativo (Bootstrap Grid)**:
  * **Escritorio**: 4 columnas por fila.
  * **Tablet**: 2 columnas por fila.
  * **Móvil**: 1 columna por fila.
 
---

## Desarrollo e Instalación
Para iniciar el servidor de desarrollo local, ejecuta:

```bash
ng serve
```
Una vez que el servidor esté en marcha, en `http://localhost:4200/` se verá la página web. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

Para crear un nuevo componente, ejecuta:
```bash
ng generate component nombre-del-componente
```

