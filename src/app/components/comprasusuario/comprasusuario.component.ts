import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
    selector: 'app-comprasusuario',
    templateUrl: './comprasusuario.component.html',
    styleUrls: ['./comprasusuario.component.css']
})
export class ComprasusuarioComponent implements OnInit {

    public pedidos! : Array<Pedido>

    constructor(
        private _service : CubosService
    ) {}

    ngOnInit(): void {

        var miToken = this._service.getToken();
        if (miToken != null) {
            this._service.getComprasUsuario(miToken).subscribe((result) => {
                this.pedidos = result;
            });
        }

    }

}
