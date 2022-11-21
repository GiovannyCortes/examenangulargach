import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-logincomponent',
    templateUrl: './logincomponent.component.html',
    styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

    public status! : number;
    public usuario! : User;

    @ViewChild("cajausuario") user! : ElementRef;
    @ViewChild("cajapassword") password! : ElementRef;

    constructor(
        private _service : CubosService
    ) {}

    ngOnInit(): void {
        this.loadLogin();
    }

    loadLogin() : void {
        var miStatus = this._service.getStatus();
        this.status = (miStatus != null)? (parseInt(miStatus)) : (1);
    }

    exitlog() {
        localStorage.clear();
        this.loadLogin();
    }

    iniciarSesion() : void {
        this.status = 2;

        var miEmail = this.user.nativeElement.value;
        var miPassword= this.password.nativeElement.value;

        var newUser = new User(miEmail, miPassword);
        this._service.generateToken(newUser).subscribe((result) => {
            this._service.setToken(result.response);
            var miToken = this._service.getToken();
            if (miToken != null) {
                console.log(miToken);
                localStorage.setItem("status", "3");
                this.loadLogin();
            }
        });
    }

}