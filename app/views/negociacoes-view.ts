import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> {

    // O professor utiliza .join('') na criação da string
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.listar().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                })} 
            </tbody>
        </table>
        `
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}