class MainController {

    constructor() {

        console.log("main controller");
        this._valorEvento = 0;

        let $ = document.querySelector.bind(document);

        this._listaEventos = new ListaEventos();
        this._eventosView = new EventosView($('#eventosView'));
        this._eventosView.update(this._listaEventos);

        this._listaOpcaoEventos = new ListaOpcaoEventos();
        this._opcaoEventosView = new OpcaoEventosView($('#opcaoEventosView'));
 //       this._opcaoEventosView.update(this._listaOpcaoEventos);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);


        this._botao = new BotaoP();
        this._botao.texto = "disabled,enabled,enabled,enabled";
        this._botaoView = new BotaoViewP($('#botao'));
 //       this._botaoView.update(this._botao);

    }

    
    enviaMsg( valor, index) {
        console.log("passou por aqui"+valor+ "" + index);
        let idCheck = "checkbox"+index;
       
        console.log(idCheck); 
        var varAux = document.getElementById(idCheck).checked;
        console.log(varAux)
        
        if (varAux == true) {
            this._valorEvento = this._valorEvento + valor 
        }else{
            this._valorEvento = this._valorEvento - valor
        }
        
        this._mensagem.texto = 'custo do evento = ' + this._valorEvento;
        this._mensagemView.update(this._mensagem);






        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);


    }

    importarEventos() {
        console.log("importando eventos");
        let service = new MainService();
        service
            .obterEventos()
            .then(  eventos => {
                   
                    this._listaEventos.adciona(eventos);
                    console.log("depois de adiciona(evento)");

                    this._mensagem.texto = "Eventos importados com sucesso";
                    this._mensagemView.update(this._mensagem);
                })
            .catch(erro => {
                console.log("erro = "+erro);
                this._mensagem.texto = erro;
                this._mensagemView.update(this._mensagem);
                return;
            });
    }

    importarOpcaoEventos(index) {

        console.log("dentro do importar opcao eventos - index = "+index);
        if ( index == 0 ){

            this._valorEvento = 0 ;
            this._listaOpcaoEventos.esvazia();
            this._opcaoEventosView.update(this._listaOpcaoEventos);
            
            this._mensagem.texto = "";
            this._mensagemView.update(this._mensagem);

        }else{

        let elemento = document.getElementById("opcaoEventosView");
        let listaOpcaoEventos = new ListaOpcaoEventos();
        let opcaoEventosView = new OpcaoEventosView(elemento);

        console.log("importando opcao eventos = "+index);
        let service = new MainService();
        service
            .obterOpcaoEventos()
            .then(  opcaoEventos => 
                    opcaoEventos.map(
                     opcaoEvento =>  { 
                        listaOpcaoEventos.adiciona(opcaoEvento);
                        console.log(listaOpcaoEventos);
                        opcaoEventosView.update(listaOpcaoEventos);
                        console.log("depois de adiciona(evento)");
                }))
            .catch(erro => {
                console.log("erro = "+erro);
                this._mensagem.texto = erro;
                this._mensagemView.update(this._mensagem);
                return;
            });
        } 
    }
}
   