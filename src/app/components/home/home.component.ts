import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/app/models/cubo';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    public cubos! : Array<Cubo>;

    constructor(
        private _service : CubosService
    ) {}

    ngOnInit(): void {

        this._service.getCubos("/api/cubos").subscribe((result) => {
            this.cubos = result;
        });

    }


}
