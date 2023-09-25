// Atividade em JavaScript: Sistema que simula Transações bancárias.
// Pedro Cezar Alves da Silva Beserra

let saldo = 1000;

const historico = [];

function mostrarMenu() {
  console.log("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:");
  console.log("1. Depositar");
  console.log("2. Sacar");
  console.log("3. Ver Saldo");
  console.log("4. Ver Histórico de Transações");
  console.log("5. Sair");
  const escolha = parseInt(prompt("Digite o número da opção desejada:"));

  if (isNaN(escolha) || escolha < 1 || escolha > 5) {
    console.log("Opção inválida. Por favor, escolha uma opção válida.");
    mostrarMenu();
    return;
  }

  switch (escolha) {
    case 1:
      depositar();
      break;
    case 2:
      sacar();
      break;
    case 3:
      verSaldo();
      break;
    case 4:
      verHistorico();
      break;
    case 5:
      console.log("Obrigado por usar o Sistema de Conta Bancária!");
      return;
  }
}

function depositar() {
  const valorDeposito = parseFloat(prompt("Digite o valor a ser depositado:"));
  if (isNaN(valorDeposito) || valorDeposito <= 0) {
    console.log("Valor de depósito inválido. Tente novamente.");
    depositar();
    return;
  }
  saldo += valorDeposito;
  historico.push({ tipo: "Depósito", valor: valorDeposito, data: new Date() });
  console.log(`Depósito de $${valorDeposito} realizado com sucesso.`);
  mostrarMenu();
}

function sacar() {
  const valorSaque = parseFloat(prompt("Digite o valor a ser sacado:"));
  if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > saldo) {
    console.log("Valor de saque inválido. Tente novamente.");
    sacar();
    return;
  }
  saldo -= valorSaque;
  historico.push({ tipo: "Saque", valor: valorSaque, data: new Date() });
  console.log(`Saque de $${valorSaque} realizado com sucesso.`);
  mostrarMenu();
}

function verSaldo() {
  console.log(`Saldo atual: $${saldo}`);
  mostrarMenu();
}

function verHistorico() {
  console.log("Histórico de Transações:");
  for (const transacao of historico) {
    console.log(`- ${transacao.tipo}: $${transacao.valor} em ${transacao.data}`);
  }
  mostrarMenu();
}

mostrarMenu();