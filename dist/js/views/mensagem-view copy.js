export class MensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(`Template mensagem: ${template}`);
        this.elemento.innerHTML = template;
    }
}
