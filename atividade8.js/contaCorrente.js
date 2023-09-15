import contaBancaria from './contaBancaria.js';

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, tipo = 'conta corrente', saldo, cartaoCredito) {
        super(agencia, numero, tipo, saldo);
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {

        const parteVisivel = this._cartaoCredito.slice(0,4);
        const parteOculta = '**** **** ****';
        return `${parteVisivel} ${parteOculta}`;
    }

    set cartaoCredito(novoCartaoCredito) {
        if (/^\d\{16}$/.teste(novoCartaoCredito)) {
            this._cartaoCredito = novoCartaoCredito;
        } else {
            console.log('Número de cartão inválido');
        }
    }
}
export default contaCorrente;