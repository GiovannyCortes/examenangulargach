import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CubomarcasComponent } from './components/cubomarcas/cubomarcas.component';
import { CubodetalleComponent } from './components/cubodetalle/cubodetalle.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';
import { InsertarcompraComponent } from './components/insertarcompra/insertarcompra.component';

const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "marca/:smarca",
        component : CubomarcasComponent
    },
    {
        path : "cubodetalle/:idCubo",
        component : CubodetalleComponent
    },
    {
        path : "login",
        component : LogincomponentComponent
    },
    {
        path : "nuevousuario",
        component : NuevousuarioComponent
    },
    {
        path : "perfilusuario",
        component : PerfilusuarioComponent
    },
    {
        path : "comprasusuario",
        component : ComprasusuarioComponent
    },
    {
        path : "insertarcompra",
        component : InsertarcompraComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
