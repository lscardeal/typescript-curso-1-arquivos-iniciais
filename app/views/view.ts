import { testarPerformance } from "../decorators/performance.js";

export abstract class View<T> {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error("seletor = null");
        }
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}