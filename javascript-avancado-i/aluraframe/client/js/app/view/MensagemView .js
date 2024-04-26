class MensagemView extends view { 

    constructor(elemento) { 

        super(elemento);
    }
    template(model) {

        return `<p class="alert alert-info">${model.texto}</p>`; 
    }

 
}