export class Comentario {

    constructor(
        public idComentario : number,
        public idCubo : number,
        public idUsuario : number,
        public comentario : string,
        public fechaComentario : string // "2022-11-21T08:57:11.755Z"
    ) {}

}