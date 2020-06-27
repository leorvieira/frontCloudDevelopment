class ClienteController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._cpf = $('#cpf');
        this._name = $('#name');
        this._email = $('#email');
        this._address = $('#address'); 
        this._number = $('#number') ; 
        this._addressComplement = $('#addressComplement');
        this._telephone = $('#telephone'); 
        this._cep = $('#cep'); 

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._botao = new Botao();
        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView = new BotaoView($('#botao'));
        this._botaoView.update(this._botao);
//        this._cliente = new Cliente;
      
    }

    consultaCliente(event) {

        console.log("consula cliente");

        event.preventDefault();

        let service = new ClienteService();
        service.consultaCliente(this._cpf.value).then(
            cliente => {
                this._name.value = cliente._name ;
                this._email.value = cliente._email;
                this._telephone.value = cliente._telephone;
                this._address.value = cliente._address;
                this._number.value = cliente._number;
                this._addressComplement.value = cliente._addressComplement;
                this._cep.value = cliente._cep;

                this._mensagem.texto = 'Consulta realizada com sucesso';
                this._mensagemView.update(this._mensagem);
     
            })
            .catch(erro => {
                this._mensagem.texto = erro;
                this._mensagemView.update(this._mensagem);
            });

        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);
    }

    incluirCliente(event) {

        event.preventDefault();

        let service = new ClienteService();
        service.incluirCliente(this._cpf.value, this._name.value, this._email.value, this._address.value, this._number.value, this._addressComplement.value, this._telephone.value, this._cep.value).then(
            cliente => {
                this._mensagem.texto = 'id = ' + cliente._id + ' cpf ' + cliente._cpf + ' nome  ' + cliente._nome ;

                this._mensagem.texto = "Cliente " + cliente._name + " cpf =  " + cliente._cpf + " incluído com sucesso.";
                this._mensagemView.update(this._mensagem);
     
            })
            .catch(erro => console.log(erro));

        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);
    }

    limpaTelaCliente(event) {

        event.preventDefault();

        this._cpf.value = '';
        this._name.value = '';
        this._email.value = '';
        this._telephone.value = '';
        this._address.value = '';
        this._number.value = '';
        this._addressComplement.value = '';
        this._cep.value = '';

        this._mensagem.texto = '';
        this._mensagemView.update(this._mensagem);


        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);

    }
}