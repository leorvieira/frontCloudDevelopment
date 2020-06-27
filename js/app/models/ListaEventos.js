class ListaEventos {

    constructor() {

        this._eventos = [];
       
    }

    adiciona(evento) {

        this._eventos.push(evento);

    }

    esvazia() {
        this._eventos = [];
    }

    get eventos() {
        return [].concat(this._eventos);
    }

}