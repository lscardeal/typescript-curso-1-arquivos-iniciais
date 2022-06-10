import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana} from "../enums/dias_semana.js";
import { testarPerformance } from "../decorators/performance.js";

export class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor () {
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    }

    @testarPerformance()
    adicionar(): void {
        const negociacao: Negociacao = Negociacao.criar
            (this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (this.isDiaUtil(negociacao)) {
            this.negociacoes.adicionar(negociacao);
            this.atualizarView(true, "Negociacao adicionada com sucesso!");
            this.limparFormulario();
        } else {
            this.atualizarView(false, "Data não é dia útil");
        }
    }

    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    private atualizarView(adicionaNegociacao: boolean, mensagem: string) {
        if (adicionaNegociacao)
            this.atualizarNegociacoesView();
        this.atualizarMensagemView(mensagem);
    }

    @testarPerformance()
    private atualizarNegociacoesView() {
        this.negociacoesView.update(this.negociacoes);
    }

    @testarPerformance()
    private atualizarMensagemView(mensagem: string) {
        this.mensagemView.update(mensagem);
    }

    private isDiaUtil(negociacao: Negociacao): boolean {
        const dia: number = negociacao.data.getDay();
        return dia > DiaDaSemana.DOMINGO && dia < DiaDaSemana.SABADO ? true : false;
    }
}