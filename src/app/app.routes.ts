import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    {path: '', component: Lista},
    {path: 'pizzas', component: Lista},
    {path: 'realizarPedido', component: Formulario}
];
