class CorridaController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._origem = $('#origem');
        this._destino = $('#destino')

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._botao = new Botao();
        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView = new BotaoView($('#botao'));
        this._botaoView.update(this._botao);
        this._corrida;
    }

    solicitarCorrida(event) {

        event.preventDefault();

        let service = new CorridaService();
        service.solicitarCorrida(this._origem.value, this._destino.value).then(
            corrida => {
                this._mensagem.texto = 'Veículo ' + corrida._carBrand + ' ' + corrida._carModel + ', placa ' + corrida._carLicensePlate + ' estará disponível em ' + (corrida._timeLeftToReachUser + corrida._timeLeftToReachDestination).toString() + ' minutos em ' + this._origem.value + ' deseja confirmar sua corrida ?';
                this._mensagemView.update(this._mensagem);
                this._corrida = corrida;
            })
            .catch(erro => console.log(erro));

        this._botao.texto = "disabled,enabled,disabled,enabled";
        this._botaoView.update(this._botao);
    }

    iniciaCorrida(event) {

        var corrida = this._corrida;
        var tempo = this._corrida._timeLeftToReachUser + this._corrida._timeLeftToReachDestination

        event.preventDefault();

        let service = new CorridaService();
        service.iniciarCorrida(corrida._id);

        this._mensagem.texto = 'Corrida iniciada. Chegaremos em ' + this._corrida._destinationAddress + ' em ' + tempo + ' minutos .';

        this._mensagemView.update(this._mensagem);
        this._botao.texto = "disabled,disabled,enabled,disabled";
        this._botaoView.update(this._botao);

        var counter = tempo;
        var timer = setInterval(function () {
            service.buscarCorrida(corrida._id).then(
                corrida => {
                    if (corrida._timeLeftToReachUser !== undefined) {
                        counter = corrida._timeLeftToReachUser + corrida._timeLeftToReachDestination;
                    }
                })
                .catch(erro => console.log(erro));
            corridaController.atualizaStatusCorrida(counter);
            if (counter == 0) {
                clearInterval(timer);
                corridaController.finalizaCorrida(event);
            }
        }, 10000);
    }

    atualizaStatusCorrida(tempo) {
        this._corrida._timeLeftToReachDestination
        this._mensagem.texto = 'Corrida iniciada. Chegaremos em ' + this._corrida._destinationAddress + ' em ' + tempo + ' minutos .';
        this._mensagemView.update(this._mensagem);
    }


    cancelaCorrida(event) {

        var corrida = this._corrida;

        event.preventDefault();

        this._origem.value = '';
        this._destino.value = '';

        service.cancelarCorrida(corrida._id);

        this._mensagem.texto = 'Corrida cancelada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView.update(this._botao);

    }
}