
class FornecedorService {

    constructor() {
        this._http = new HttpService();
    }

    consultaFornecedor(cnpj) {
        console.log("dentro do consulta cliente = "+cnpj);
        return new Promise((resolve, reject) => {
            this._http.getF('https://rws-onparty-middleware.herokuapp.com/v1/suppliers/cnpj/'+cnpj).then
                (objeto => {
                    resolve(new Fornecedor(objeto._id, objeto._cnpj, objeto._name, objeto._email, objeto._address, objeto._number, objeto._addressComplement, objeto._telephone, objeto._cep, objeto._status))
                    console.log("retornando da consulta fornecedor");
                    console.log(objeto._name);
                }).catch(
                    erro => {
                        console.error(erro)
                        reject(erro);
                    });
        });
    }


    incluirFornecedor(cnpj, name, email, address, number, addressComplement, telephone, cep) {

        console.log("dentro do incluir fornecedor no FornecedorService");

        let url = "https://rws-onparty-middleware.herokuapp.com/v1/suppliers"

        var data = {};
        data.address = address;
        data.addressComplement = addressComplement;
        data.cep = cep;
        data.cnpj = cnpj;
        data.email = email;
        data.id = 0;
        data.name = name;
        data.number = number;
        data.status = "ACTIVE";
        data.telephone = telephone;

        let json = JSON.stringify(data);
        console.log("antes de chamar o post request no http service ");
        console.log(json);

        return new Promise((resolve, reject) => {

    
            console.log(url);
            this._http.postF(url, json).then
                (objeto => {
                    resolve(new Fornecedor(objeto._id, objeto._cnpj, objeto._name, objeto._email, objeto._address, objeto._number, objeto._addressComplement, objeto._telephone, objeto._cep, objeto._status))
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel cadastrar cliente');
                    });
        });
    }


    solicitarCorrida(origem, destino) {

        let url = "https://rws-autonomous-vehicle-fleet.herokuapp.com/course?departureAddress=" + origem.replace(/( )+/g, '%20') + "&destinationAddress=" + destino.replace(/( )+/g, '%20') + "&userId=1"

        return new Promise((resolve, reject) => {
            this._http.post(url).then
                (objeto => {
                    resolve(new Corrida(objeto._id, objeto._userId, objeto._vehicleId, objeto._price, objeto._departureAddress, objeto._destinationAddress, objeto._timeToUser, objeto._timeToDestination, objeto._timeLeftToReachDestination, objeto._timeLeftToReachUser, objeto._status, objeto._carBrand, objeto._carModel, objeto._carLicensePlate, objeto._localization))
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
        });
    }

    iniciarCorrida(id) {

        var updateSuccess;

        new Promise((resolve, reject) => {
            this._http.put('https://rws-autonomous-vehicle-fleet.herokuapp.com/course/' + id + '/EM_CURSO').then
                (retorno => {
                    resolve(retorno);
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
        });
    }

    buscarCorrida(id) {
        return new Promise((resolve, reject) => {
            this._http.get('https://rws-autonomous-vehicle-fleet.herokuapp.com/course/' + id).then
                (objeto => {
                    resolve(new Corrida(objeto._id, objeto._userId, objeto._vehicleId, objeto._price, objeto._departureAddress, objeto._destinationAddress, objeto._timeToUser, objeto._timeToDestination, objeto._timeLeftToReachDestination, objeto._timeLeftToReachUser, objeto._status, objeto._carBrand, objeto._carModel, objeto._carLicensePlate, objeto._localization))
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
        });
    }

    cancelarCorrida(id) {

        new Promise((resolve, reject) => {
            this._http.put('https://rws-autonomous-vehicle-fleet.herokuapp.com/course/' + id + '/CANCELADO').then
                (retorno => {
                    updateSuccess = retorno
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
        });
    }
}