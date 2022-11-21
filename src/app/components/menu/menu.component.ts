import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/app/models/cubo';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    public marcas! : Array<string>;

    constructor(
        private _service : CubosService
    ) {}

    ngOnInit(): void {
        
        this._service.getMarcas("/api/cubos/marcas").subscribe((result) => {
            this.marcas = result;
        });

    }

}
