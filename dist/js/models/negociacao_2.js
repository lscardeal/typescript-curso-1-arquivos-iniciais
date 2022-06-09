var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Negociacao2_data, _Negociacao2_quantidade, _Negociacao2_valor;
export class Negociacao2 {
    constructor(data, quantidade, valor) {
        _Negociacao2_data.set(this, void 0);
        _Negociacao2_quantidade.set(this, void 0);
        _Negociacao2_valor.set(this, void 0);
        __classPrivateFieldSet(this, _Negociacao2_data, data, "f");
        __classPrivateFieldSet(this, _Negociacao2_quantidade, quantidade, "f");
        __classPrivateFieldSet(this, _Negociacao2_valor, valor, "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _Negociacao2_data, "f");
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _Negociacao2_quantidade, "f");
    }
    get valor() {
        return __classPrivateFieldGet(this, _Negociacao2_valor, "f");
    }
    get volume() {
        return __classPrivateFieldGet(this, _Negociacao2_quantidade, "f") * __classPrivateFieldGet(this, _Negociacao2_valor, "f");
    }
}
_Negociacao2_data = new WeakMap(), _Negociacao2_quantidade = new WeakMap(), _Negociacao2_valor = new WeakMap();
