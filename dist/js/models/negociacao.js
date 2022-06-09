export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criar(dataRaw, quantidadeRaw, valorRaw) {
        const data = this.criarData(dataRaw);
        const quantidade = parseInt(quantidadeRaw);
        const valor = parseFloat(valorRaw);
        return new Negociacao(data, quantidade, valor);
    }
    static criarData(inputData) {
        const hifem = /-/g;
        const virgula = ',';
        const dataFormatada = inputData.replace(hifem, virgula);
        return new Date(dataFormatada);
    }
}
