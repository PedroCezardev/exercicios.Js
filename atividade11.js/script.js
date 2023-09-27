class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(valor) {
        this.saldo = valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, saldo) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipoSelect = document.getElementById("tipo");
    const tipoIndex = tipoSelect.selectedIndex;
    const tipo = tipoSelect.options[tipoIndex].value.toLowerCase();
    const saldo = parseFloat(document.getElementById("saldo").value);

    let conta;

    switch (tipo.toLowerCase()) {
        case "conta corrente":
            const cartaoCredito = parseFloat(prompt("Digite o limite do cartão de crédito:"));
            conta = new ContaCorrente(agencia, numero, cartaoCredito, saldo);
            break;
        case "conta poupança":
            conta = new ContaPoupanca(agencia, numero, saldo);
            break;
        case "conta universitária":
            conta = new ContaUniversitaria(agencia, numero, saldo);
            break;
        default:
            alert("Tipo de conta inválido.");
            return;
    }

    contas.push(conta);
    atualizarDropdown();
    limparCampos();
}

function atualizarDropdown() {
    const contasDropdown = document.getElementById("contasDropdown");
    contasDropdown.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${contas[i].agencia} - ${contas[i].numero} (${contas[i].tipo})`;
        contasDropdown.appendChild(option);
    }
}

function deletarConta() {
    const contasDropdown = document.getElementById("contasDropdown");
    const selectedIndex = contasDropdown.value;
    if (selectedIndex !== "") {
        contas.splice(selectedIndex, 1);
        atualizarDropdown();
        limparCampos();
    }
}

function limparCampos() {
    document.getElementById("agencia").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("saldo").value = "";
}

function visualizarContas() {
    const contasList = document.getElementById("contasList");
    contasList.innerHTML = "";

    contas.forEach(conta => {
        listaContas.innerHTML += `
            <div>
                <br>
                <strong>Tipo:</strong> ${conta.tipo}<br>
                <strong>Agência:</strong> ${conta.agencia}<br>
                <strong>Número:</strong> ${conta.numero}<br>
                <strong>Tipo:</strong> ${conta.tipo}<br>
                <strong>Saldo:</strong> R$ ${conta.getSaldo().toFixed(2)}
                ${conta instanceof ContaCorrente ? `<br><strong>Limite Cartão Crédito:</strong> R$ ${conta.getCartaoCredito().toFixed(2)}` : ""}
            </div>
        `;
    });
}

function sacar() {
    const contasDropdown = document.getElementById("contasDropdown");
    const selectedIndex = contasDropdown.value;

    if (selectedIndex === "") {
        alert("Selecione uma conta para sacar.");
        return;
    }

    const valorSaque = parseFloat(document.getElementById("valorSaque").value);

    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Digite um valor de saque válido.");
        return;
    }

    const contaSelecionada = contas[selectedIndex];

    if (contaSelecionada.sacar(valorSaque)) {
        alert(`Saque de $${valorSaque} realizado com sucesso.`);
        atualizarDropdown();
        limparCampos();
    } else {
        alert("Saldo insuficiente para sacar.");
    }
}
