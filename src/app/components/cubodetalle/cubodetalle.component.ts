import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { Comentario } from 'src/app/models/comentario';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-cubodetalle',
    templateUrl: './cubodetalle.component.html',
    styleUrls: ['./cubodetalle.component.css']
})
export class CubodetalleComponent implements OnInit {

    public comentarios! : Array<Comentario>;
    public idCubo! : string;
    public cubo! : Cubo;

    constructor(
        private _service : CubosService,
        private _activatedRoute : ActivatedRoute
    ) {}

    ngOnInit(): void {

        this._activatedRoute.params.subscribe((parametros : Params) => {
            this.idCubo = parametros["idCubo"];

            this._service.getCuboPorId("/api/cubos", this.idCubo).subscribe((result) => {
                this.cubo = result;
            });
            
            this._service.getComentarios("/api/comentarioscubo/getcomentarioscubo/", this.idCubo).subscribe((result) => {
                this.comentarios = result;
            });
        });

    }

}
