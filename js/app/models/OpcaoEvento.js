class OpcaoEvento {

    constructor(id_evento, opcaoEvento, tipoOpcaoEvento, especTipoOpcaoEvento, nomeFornecedorOpcaoEvento, precoOpcaoEvento) {

        this._id_evento = id_evento; 
        this._opcaoEvento = opcaoEvento;
        this._tipoOpcaoEvento = tipoOpcaoEvento; 
        this._especTipoOpcaoEvento = especTipoOpcaoEvento;
        this._nomeFornecedorOpcaoEvento = nomeFornecedorOpcaoEvento;
        this._precoOpcaoEvento = precoOpcaoEvento;  


        Object.freeze(this);
    }

    // getters and setters ?

}