class contaBancaria {
    constructor(agencia, numero, tipo = 'conta bancaria', saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
   
   get saldo() {
    return this._saldo;
   }

   set saldo(novoSaldo) {

    if (novoSaldo.length >= 0) {
        this._saldo = novoSaldo;
    }
    else {
        console.log("Saldo insuficiente");
    }
   }

   sacar(valor) {
    if(valor > 0 && valor <= this.saldo) {
        this._saldo -= valor;
        console.log(`Saque de R${valor} realizado com sucesso! `);
    }
    else {
        console.log("Saldo insuficiente ou valor de saque inválido");
    }
   }

   depositar(valor) {
   
    if(valor > 0) {
        this._saldo += valor;
        console.log(`Depósito no valor de R${valor} realizado com sucesso!`);
    }
    else {
        console.log('Valor de Depósito inválido!');
    }
   }

}
export default contaBancaria;