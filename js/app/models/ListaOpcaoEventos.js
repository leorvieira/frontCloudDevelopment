class ListaOpcaoEventos {

    constructor() {

        this._opcaoEventos = [];
       
    }

    adiciona(opcaoEvento) {

        this._opcaoEventos.push(opcaoEvento);

    }

    esvazia() {
        this._opcaoEventos = [];
    }

    get opcaoEventos() {
        return [].concat(this._opcaoEventos);
    }

}

