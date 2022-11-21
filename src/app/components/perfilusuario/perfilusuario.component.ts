import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'app-perfilusuario',
    templateUrl: './perfilusuario.component.html',
    styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

    public miUsuario! : Usuario;

    constructor(
        private _service : CubosService,
        private _router : Router
    ) {}

    ngOnInit(): void {
        
        var miToken = this._service.getToken();
        if (miToken != null) {
            this._service.getPerfilUsuario(miToken).subscribe((result) => {
                this.miUsuario = result;
            });
        } else {
            this._router.navigate(["/"]);
        }


    }

}
