var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from "../enums/dias_semana.js";
import { testarPerformance } from "../decorators/performance.js";
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
            this.atualizarNegociacoesView();
        this.atualizarMensagemView(mensagem);
    }
    atualizarNegociacoesView() {
        this.negociacoesView.update(this.negociacoes);
    }
    atualizarMensagemView(mensagem) {
        this.mensagemView.update(mensagem);
    }
    isDiaUtil(negociacao) {
        const dia = negociacao.data.getDay();
        return dia > DiaDaSemana.DOMINGO && dia < DiaDaSemana.SABADO ? true : false;
    }
}
__decorate([
    testarPerformance()
], NegociacaoController.prototype, "adicionar", null);
__decorate([
    testarPerformance()
], NegociacaoController.prototype, "atualizarNegociacoesView", null);
__decorate([
    testarPerformance()
], NegociacaoController.prototype, "atualizarMensagemView", null);
