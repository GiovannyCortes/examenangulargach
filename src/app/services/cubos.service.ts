import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../models/user';
import { Usuario } from '../models/usuario';

@Injectable()
export class CubosService {

    constructor(private _http : HttpClient) {}

    // SECCIÓN TOKENS ===========================================================================

    generateToken(user : User) : Observable<any> {
        var json = JSON.stringify(user);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var url = environment.urlApi + "/api/Manage/Login";
        return this._http.post(url, json, {headers : header});
    }

    setToken(token : string) : void {
        localStorage.setItem('token', token);
    }

    getToken() : string | null {
        return localStorage.getItem('token');
    }

    getStatus() : string | null {
        return localStorage.getItem('status');
    }

    // ==========================================================================================


    // SECCIÓN SERVICE ==========================================================================

    getCubos(request : string) : Observable<any> {
        var url = environment.urlApi + request;
        return this._http.get(url);
    }

    getCuboPorId(request : string, identificador : string) : Observable<any> {
        var url = environment.urlApi + request + "/" + identificador;
        return this._http.get(url);
    }

    getCubosPorMarca(request : string, smarca : string) : Observable<any> {
        var url = environment.urlApi + request + "/" + smarca;
        return this._http.get(url);
    }

    getMarcas(request : string) : Observable<any> {
        var url = environment.urlApi + request;
        return this._http.get(url);
    }

    getComentarios(request : string, idcubo : string) : Observable<any> {
        var url = environment.urlApi + request + "/" + idcubo;
        return this._http.get(url);
    }

    postNuevoUsuario(newUsuario : Usuario) : Observable<any> {
        var json = JSON.stringify(newUsuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var url = environment.urlApi + "/api/Manage/RegistroUsuario/";
        return this._http.post(url, json, {headers : header});
    }
    
    // ==========================================================================================


    // SECCIÓN SERVICE TOKENS ===================================================================

    getPerfilUsuario(token : string) : Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + token);
        var url = environment.urlApi + "/api/Manage/PerfilUsuario/";
        return this._http.get(url, {headers : header});
    }

    getComprasUsuario(token : string) : Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + token);
        var url = environment.urlApi + "/api/compra/comprasusuario";
        return this._http.get(url, {headers : header});
    }

    postCompra(idCubo : string, token : string) : Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + token);
        var url = environment.urlApi + "/api/compra/insertarpedido/" + idCubo;
        return this._http.post(url, "", {headers : header});
    }

    // ==========================================================================================
}
