import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { Usuario } from 'src/app/models/usuario';
import { CubosService } from 'src/app/services/cubos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-nuevousuario',
    templateUrl: './nuevousuario.component.html',
    styleUrls: ['./nuevousuario.component.css']
})

export class NuevousuarioComponent implements OnInit {

    @ViewChild("cajanombre") nombre! : ElementRef;
    @ViewChild("cajaemail") email! : ElementRef;
    @ViewChild("cajapassword") pass! : ElementRef;
    @ViewChild("cajapasswordr") rpass! : ElementRef;

    public status! : number;

    constructor(
        private _service : CubosService,
        private _router : Router
    ) { }

    ngOnInit() : void {
        this.loadComponent();
    }

    loadComponent() : void {
        var miStatus = this._service.getStatus();
        this.status = (miStatus != null)? (parseInt(miStatus)) : (1);
    }

    login(email : string, password : string) {
        var insertUser = new User(email, password);
            this._service.generateToken(insertUser).subscribe((result) => {
                this._service.setToken(result.response);
                var miToken = this._service.getToken();
                if (miToken != null) {
                    localStorage.setItem("status", "3");
                    this.loadComponent();
                    this._router.navigate(["/login"]);
                }
        });
    }

    nuevousuario() : void {
        var pass_1 = this.pass.nativeElement.value;
        var pass_2 = this.rpass.nativeElement.value;

        if (pass_1 === pass_2) {
            this.status = 2;
            var newUser = new Usuario (
                0,
                this.nombre.nativeElement.value,
                this.email.nativeElement.value,
                pass_1
            )
            this._service.postNuevoUsuario(newUser).subscribe(() => {
                this.login(newUser.email, newUser.pass);
            });
        } else {
            Swal.fire(
                'Las contraseñas no son iguales',
                'Vuelva a intentarlo, porfavor',
                'error'
            );
        }

    }

}
