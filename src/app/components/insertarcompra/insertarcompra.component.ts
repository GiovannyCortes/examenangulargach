import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/app/models/cubo';

@Component({
    selector: 'app-insertarcompra',
    templateUrl: './insertarcompra.component.html',
    styleUrls: ['./insertarcompra.component.css']
})
export class InsertarcompraComponent implements OnInit {

    public cubos! : Array<Cubo>;

    constructor(
        private _service : CubosService
    ) {}

    ngOnInit(): void {

        this._service.getCubos("/api/cubos").subscribe((result) => {
            this.cubos = result;
        });

    }

    comprar(idCubo : string) : void {
        var miToken = this._service.getToken();
        console.log(miToken);
        if (miToken != null) {
            this._service.postCompra(idCubo, miToken).subscribe((result) => {
                console.log(result);
            });          
        }
    }

}
