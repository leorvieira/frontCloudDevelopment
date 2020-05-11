class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._origem = $('#origem');
        this._destino = $('#destino')

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._botao = new Botao();
        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView = new BotaoView($('#botao'));
        this._botaoView.update(this._botao);
    }

    solicitarCorrida(event) {

        event.preventDefault();

        let service = new NegociacaoService();
        console.log(this._origem.value);
        console.log(this._destino.value);
        service.solicitarCorrida(this._origem.value, this._destino.value).then(
            corrida => {
                this._mensagem.texto = 'Veículo ' + corrida._carBrand + ' ' + corrida._carModel + ', placa ' + corrida._carLicensePlate + ' estará disponível em ' + corrida._timeToUser.toString() + ' minutos em ' + this._origem.value + ' deseja confirmar sua corrida ?';
                this._mensagemView.update(this._mensagem);

                this._corrida = corrida;

                console.log("negociacoes da semana obtida com sucesso");
            })
            .catch(erro => console.log(erro));

        this._botao.texto = "disabled,enabled,disabled,enabled";
        this._botaoView.update(this._botao);
    }


    iniciaCorrida(event) {

        event.preventDefault();

        window.setInterval( console.log("progress bar"), 3000);

        // chamar API para solicitar inicio da corrida passando ( usuario, origem, destino ) e retornando
        // ( carro, placa, origem, destino e previsão de chegada )  
        let service = new NegociacaoService();
        service.iniciarCorrida();

        this._mensagem.texto = 'Corrida iniciada. Chegaremos em ' + this._corrida._destinationAddress   + ' em ' + this._corrida._timeLeftToReachDestination + ' minutos .';

        this._mensagemView.update(this._mensagem);

        this._botao.texto = "disabled,disabled,enabled,disabled";
        this._botaoView.update(this._botao);


//        resolver(this._corrida._timeLeftToReachDestination);
        var tempo = this._corrida._timeLeftToReachDestination;
        var counter = tempo;
        var timer = setInterval( function(){
        if ( counter <= 0 ){
            clearInterval( timer );
        }
        if ( counter > 0 ){
            negociacaoController.atualizaStatusCorrida(counter);
        }else{
            negociacaoController.finalizaCorrida(event);
        }
        console.log( counter-- );;
        }, 1000);

 
    }

    finalizaCorrida(event) {


        // chamar API para solicitar a finalização da corrida passando ( usuario, origem, destino ) e 
        // retornando o status de corrida finalizada e o valor total a ser cobraddo.  

        event.preventDefault();
        this._mensagem.texto = 'Corrida finalizada com sucesso. O valor de R$' + this._corrida._price + ' será cobrado em seu cartão de crédito. Obrigado pela preferência.';
        this._mensagemView.update(this._mensagem);

        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView.update(this._botao);

    }


    atualizaStatusCorrida(tempo) {


        // chamar API para solicitar a finalização da corrida passando ( usuario, origem, destino ) e 
        // retornando o status de corrida finalizada e o valor total a ser cobraddo.  

        this._corrida._timeLeftToReachDestination
        this._mensagem.texto = 'Corrida iniciada. Chegaremos em ' + this._corrida._destinationAddress   + ' em ' + tempo + ' minutos .';
        this._mensagemView.update(this._mensagem);
       

       
    }


    cancelaCorrida(event) {

        event.preventDefault();

        // chamar API para solicitar cancelamento da corrida passando ( usuario, origem, destino )  e recebendo
        // o status da solicitação ( ok / nok )


        this._origem.value        = '';
        this._destino.value       = '';

        this._mensagem.texto = 'Corrida cancelada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView.update(this._botao);

    }

    validaLogin(event) {

        event.preventDefault();

        this._botao.texto = "enabled,disabled,disabled,disabled";
        this._botaoView.update(this._botao);

    }

    importaNegociacoes() {

        let service = new NegociacaoService();
        service.obterNegociacoes("semana").then(
            negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                console.log("negociacoes da semana obtida com sucesso");
                this._negociacoesView.update(this._listaNegociacoes);
            })
            .catch(erro => console.log(erro));

    };

    apaga() {
        //   this._listaNegociacoes.esvazia();
        //   this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }


    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}