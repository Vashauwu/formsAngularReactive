import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'formulario',
        pathMatch: 'full'

    },
    {
        path:'formulario',
        loadChildren: () => import ('./formulario/formulario.routes').then((routes) => routes.FormularioRoutes),
    }
]