import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}