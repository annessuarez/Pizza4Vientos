# 4VPizzaAnneSuarez

Aplicación web interactiva desarrollada para la gestión y pedido de pizzas en línea. 

Este proyecto está construido con **Angular CLI** (versión 22.2.1), **TypeScript** y **Bootstrap 5 / SCSS**.

---
## Componentes Principales
* **`Header`**: Cabecera visual de la aplicación con el nombre y el logo de 4V Pizza.
* **`Navbar`**: Barra de navegación que incluye:
  * Buscador de pizzas por ingredientes (comunicado mediante `@Output`).
  * Enlaces de navegación (*Ver pizzas* y *Realizar pedido*).
* **`Lista de Pizzas`**: Contenedor principal que maneja dos estados de la lista:
  * Lista completa de pizzas.
  * Lista filtrada según los ingredientes seleccionados/buscados (comunicada mediante `@Input` y reactividad en tiempo real).
* **`Card de Pizza`**: Componente individual iterado mediante un array/modelo (`.ts`) para mostrar cada pizza con:
  * Título y precio en la cabecera.
  * Imagen visual del producto.
  * Lista de ingredientes.
* **`Formulario de Pedido`**: Formulario interactivo en Angular para la gestión de pedidos, donde se recogen:
  * Hora de entrega deseada.
  * Dirección de envío.
  * Método de pago (Bizum o Tarjeta).
* **`Footer`**: Pie de página con información y créditos.

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

