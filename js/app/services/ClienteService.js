
class ClienteService {

    constructor() {
        this._http = new HttpService();
    }

    consultaCliente(cpf) {
        console.log("dentro do consulta cliente = "+cpf);
        return new Promise((resolve, reject) => {
            this._http.get('https://rws-onparty-middleware.herokuapp.com/v1/customers/cnpj/'+cpf).then
                (objeto => {
                    resolve(new Cliente(objeto._id, objeto._cpf, objeto._name, objeto._email, objeto._address, objeto._number, objeto._addressComplement, objeto._telephone, objeto._cep, objeto._status))
                    console.log("retornando da consulta cliente");
                    console.log(objeto._name);
                }).catch(
                    erro => {
                        console.error(erro)
                        reject(erro);
                    });
        });
    }


    incluirCliente(cpf, name, email, address, number, addressComplement, telephone, cep) {

        console.log("dentro do incluir cliente no ClienteService");

        let url = "https://rws-onparty-middleware.herokuapp.com/v1/customers"

        var data = {};
        data.id = 0;
        data.cpf = cpf;
        data.name = name;
        data.email = email;
        data.address = address;
        data.number = number;
        data.addressComplement = addressComplement;
        data.telephone = telephone;
        data.cep = cep;
        data.status = "ACTIVE";

        let json = JSON.stringify(data);
        console.log("antes de chamar o post request no http service ");
        console.log(json);

        return new Promise((resolve, reject) => {

    
            console.log(url);
            this._http.post(url, json).then
                (objeto => {
                    resolve(new Cliente(objeto._id, objeto._cpf, objeto._name, objeto._email, objeto._address, objeto._number, objeto._addressComplement, objeto._telephone, objeto._cep, objeto._status))
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