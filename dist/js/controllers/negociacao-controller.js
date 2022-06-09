import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from "../enums/dias_semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = Negociacao.criar(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (this.isDiaUtil(negociacao)) {
            this.negociacoes.adicionar(negociacao);
            this.atualizarView(true, "Negociacao adicionada com sucesso!");
            this.limparFormulario();
        }
        else {
            this.atualizarView(false, "Data não é dia útil");
        }
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    atualizarView(adicionaNegociacao, mensagem) {
        if (adicionaNegociacao)
            this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(mensagem);
    }
    isDiaUtil(negociacao) {
        const dia = negociacao.data.getDay();
        return dia > DiaDaSemana.DOMINGO && dia < DiaDaSemana.SABADO ? true : false;
    }
}
