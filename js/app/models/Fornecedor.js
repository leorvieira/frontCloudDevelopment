class Fornecedor {

    constructor(id, cnpj, name, email, address, number, addressComplement, telephone, cep, status) {

        this._id = id; 
        this._cnpj = cnpj; 
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