class Cliente {

    constructor(id, cpf, name, email, address, number, addressComplement, telephone, cep, status) {

        this._id = id; 
        this._cpf = cpf; 
        this._name = name; 
        this._email = email; 
        this._address = address; 
        this._number = number ; 
        this._addressComplement = addressComplement;
        this._telephone = telephone; 
        this._cep = cep; 
        this._status = status;

        Object.freeze(this);
    }
}