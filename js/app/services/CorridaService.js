
class CorridaService {

    constructor() {
        this._http = new HttpService();
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