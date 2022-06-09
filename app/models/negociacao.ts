export class Negociacao {
    
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    static criar(dataRaw: string, quantidadeRaw: string, valorRaw: string): Negociacao {
        const data: Date = this.criarData(dataRaw);
        const quantidade: number = parseInt(quantidadeRaw);
        const valor: number = parseFloat(valorRaw);

        return new Negociacao(
            data,
            quantidade,
            valor,
        );
    }

    private static criarData(inputData: string): Date {
        const hifem = /-/g;
        const virgula = ',';
        const dataFormatada = inputData.replace(hifem, virgula);
        return new Date(dataFormatada);
    }
    
}