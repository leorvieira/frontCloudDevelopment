
class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

<<<<<<< HEAD
    solicitarCorrida(origem, destino) {
        let url = "https://rws-autonomous-vehicle-fleet.herokuapp.com/course?departureAddress=" + origem.replace(/( )+/g, '%20') + "&destinationAddress=" + destino.replace(/( )+/g, '%20') + "&userId=1"
=======
    solicitarCorrida(url) {
>>>>>>> b815328f702a176817d27ba966e45c5bac8171ca
        return new Promise((resolve, reject) => {
            this._http.post(url).then
                (objeto => {
                    resolve(new Corrida(objeto._id, objeto._userId, objeto._vehicleId, objeto._price, objeto._departureAddress, objeto._destinationAddress, objeto._timeToUser, objeto._timeToDestination, objeto._timeLeftToReachDestination, objeto._timeLeftToReachUser, objeto._status, objeto._carBrand, objeto._carModel, objeto._carLicensePlate, objeto._localization))
                    console.log("Negociacoes importadas com sucesso.");
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
        });
    }

    iniciarCorrida() {

        return new Promise((resolve, reject) => {
            this._http.get('https://rws-autonomous-vehicle-fleet.herokuapp.com/vehicle/1').then
                (corrida => {
                    resolve(corrida.map(objeto => new Corrida(objeto.available, objeto.carBrand, objeto.carModel, objeto.carLicensePlate, objeto.localization)));
                    console.log("corrida importada com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });
    }

    cancelarCorrida(opcao) {

        return new Promise((resolve, reject) => {
            this._http.get("https://rws-autonomous-vehicle-fleet.herokuapp.com/vehicle/1").then
                (negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });
    }

    obterNegociacoes(opcao) {

        return new Promise((resolve, reject) => {
            this._http.get("https://rws-autonomous-vehicle-fleet.herokuapp.com/vehicle/1").then
                (negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this._http.get('https://rws-autonomous-vehicle-fleet.herokuapp.com/vehicle/1').then
                (negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });

    }

    obterNegociacoesAnterior() {

        return new Promise((resolve, reject) => {
            this._http.get('http://localhost:3000/negociacoes/anterior').then
                (negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });

    }

    obterNegociacoesRetrasada() {

        return new Promise((resolve, reject) => {
            this._http.get('http://localhost:3000/negociacoes/retrasada').then
                (negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log("Negociacoes importadas com sucesso.");
                    /*   this._mensagem.texto = 'Negociações importadas com sucesso.' ; 
                    this._negociacoesView.update( this._listaNegociacoes);
                    this._mensagemView.update( this._mensagem); */
                }).catch(
                    erro => {
                        console.error(erro)
                        reject('Nao foi possivel obter as negociacoes');
                    });
            /*    this._mensagem.texto = 'Não foi possível obter as negociações.' ; */
        });

    }


    montaEndPoint(opcao) {

        var endPointAux1 = "http://localhost:3000/negociacoes/";
        var endPoint = endPointAux1.concat(opcao);
        return endPoint;
    }

}