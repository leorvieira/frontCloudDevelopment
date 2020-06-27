class MainService {

    constructor() {
        this._http = new HttpService();
    }

    obterEventos() {

            return new Promise(
                (resolve, reject) => {
                    fetch('https://myback-ms.herokuapp.com/v1/evento')
                        .then(res => res.json())
                        .then(eventos => {
                            resolve(
                                eventos.map(
                                    evento => new Evento(
                                        evento.id_evento,
                                        evento.descricao_evento
                                    )
                                )
                            )
                        })
                        .catch(err => {
                            console.error(err)
                            reject("deu ruim")
                            console.log("deu ruim")
                        })    
                }
            )
    }


    obterOpcaoEventos() {

        return new Promise(
            (resolve, reject) => {
                fetch('https://myback-ms.herokuapp.com/v1/opcaoEvento')
                    .then(res => res.json())
                    .then(opcaoEventos => {
                        resolve(
                            opcaoEventos.map(
                                opcaoEvento => new OpcaoEvento(
                                    opcaoEvento.id_evento,
                                    opcaoEvento.opcaoEvento,
                                    opcaoEvento.tipoOpcaoEvento,
                                    opcaoEvento.especTipoOpcaoEvento,
                                    opcaoEvento.nomeFornecedorOpcaoEvento,
                                    opcaoEvento.precoOpcaoEvento
                                )
                            )
                        )
                    })
                    .catch(err => {
                        console.error(err)
                        reject("deu ruim")
                        console.log("deu ruim")
                    })    
            }
        )
}
}