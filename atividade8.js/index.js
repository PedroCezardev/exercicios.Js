import contaBancaria from './contaBancaria.js';
import contaCorrente from './contaCorrente.js';
import contaPoupanca from './contaPoupanca.js';
import contaUniversitaria from './contaUniversitaria.js';

const minhaContaBancaria = new contaBancaria(13344, 12312312, 'conta bancaria', 1000);
const minhaContaCorrente = new contaCorrente(69922, 79312344, 'conta corrente', 2000);
const minhaContaPoupanca = new contaPoupanca(12332, 12332145, 'conta poupanca', 3000);
const minhaContaUniversitaria = new contaUniversitaria(88534, 89834332, 'conta universitaria', 4000);

console.log(minhaContaBancaria);
console.log(minhaContaCorrente);
console.log(minhaContaPoupanca);
console.log(minhaContaUniversitaria);

const valorSaque = parseFloat(prompt("Quando deseja Sacar da sua conta bancária?"));
minhaContaBancaria.sacar(valorDeposito);
console.log(`Saldo da conta bancária: R$ ${minhaContaBancaria.saldo}`);

const valorDeposito = parseFloat(prompt("Quanto deseja depositar na sua conta bancária?"));
minhaContaBancaria.depositar(valorDeposito);
console.log(`Saldo da conta bancária: R$ ${minhaContabancaria.saldo}`);

const valorSaque2 = parseFloat(prompt("Quanto deseja Sacar da sua conta corrente?"));
minhaContaCorrente.sacar(valorSaque2); 
console.log(`Saldo da conta corrente: R$ ${minhaContaCorrente.saldo}`);

const valorDeposito2 = parseFloat(prompt("Quanto deseja Depositar na sua conta corrente?"));
minhaContaCorrente.depositar(valorDeposito2); 
console.log(`Saldo da conta corrente: R$ ${minhaContaCorrente.saldo}`);

const meuCartao = new cartaoCredito('1234567890123456');

console.log(`Número do cartão: ${meuCartao.numero}`); 
meuCartao.numero = '9876'; 

const valorSaque3 = parseFloat(prompt("Quanto deseja Sacar da sua conta poupança?"));
minhaContaPoupanca.sacar(valorSaque3); 
console.log(`Saldo da conta poupança: R$ ${minhaContaPoupanca.saldo}`);

const valorDeposito3 = parseFloat(prompt("Quanto deseja Depositar na sua conta poupança?"));
minhaContaPoupanca.depositar(valorDeposito3); 
console.log(`Saldo da conta poupança: R$ ${minhaContaPoupanca.saldo}`);

const valorSaque4 = parseFloat(prompt("Quanto deseja Sacar da sua conta universitária?"));
minhaContaUniversitaria.sacar(valorSaque4); 
console.log(`Saldo da conta universitária: R$ ${minhaContaUniversitaria.saldo}`);

const valorDeposito4 = parseFloat(prompt("Quanto deseja Depositar na sua conta universitária?"));
minhaContaUniversitaria.depositar(valorDeposito4); 
console.log(`Saldo da conta universitária: R$ ${minhaContaUniversitaria.saldo}`);
