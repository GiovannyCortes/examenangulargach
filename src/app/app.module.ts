import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { CubosService } from './services/cubos.service';
import { CubomarcasComponent } from './components/cubomarcas/cubomarcas.component';
import { CubodetalleComponent } from './components/cubodetalle/cubodetalle.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';
import { InsertarcompraComponent } from './components/insertarcompra/insertarcompra.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        CubomarcasComponent,
        CubodetalleComponent,
        LogincomponentComponent,
        NuevousuarioComponent,
        PerfilusuarioComponent,
        ComprasusuarioComponent,
        InsertarcompraComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [CubosService],
    bootstrap: [AppComponent]
})

export class AppModule { }
