import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-cubomarcas',
  templateUrl: './cubomarcas.component.html',
  styleUrls: ['./cubomarcas.component.css']
})
export class CubomarcasComponent implements OnInit {

    public miMarca! : string;
    public cubos! : Array<Cubo>; 

    constructor(
        private _service : CubosService,
        private _activateRouter : ActivatedRoute
    ) {}

    ngOnInit(): void {
        
        this._activateRouter.params.subscribe((parametros : Params) => {
            this.miMarca = parametros['smarca'];
            this._service.getCubosPorMarca("/api/cubos/cubosmarca", this.miMarca).subscribe((result) => {
                this.cubos = result;
            })    
        });

    }

}
