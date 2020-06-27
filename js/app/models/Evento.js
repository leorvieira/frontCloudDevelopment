class Evento {

    constructor(id_evento, descricao_evento) {

        this._id_evento = id_evento; 
        this._descricao_evento = descricao_evento;  

        Object.freeze(this);
    }

    // getters and setters ?

}