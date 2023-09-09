// Arrays para armazenar produtos e pessoas
let produtos = [];
let pessoas = [];

// Função para gerar um número aleatório dentro de um intervalo
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para exibir o menu
function exibirMenu() {
  console.log("Menu:");
  console.log("1. Cadastrar Produto");
  console.log("2. Cadastrar Pessoas");
  console.log("3. Sortear");
  console.log("4. Sair");
}

// Loop do menu
let escolha = 0;
while (escolha !== 4) {
  exibirMenu();
  escolha = parseInt(prompt("Escolha uma opção:"));

  switch (escolha) {
    case 1:
      let novoProduto = prompt("Digite o nome do novo produto:");
      produtos.push(novoProduto);
      console.log("Produto cadastrado com sucesso!");
      break;

    case 2:
      let novaPessoa = prompt("Digite o nome da nova pessoa:");
      pessoas.push(novaPessoa);
      console.log("Pessoa cadastrada com sucesso!");
      break;

    case 3:
      if (produtos.length === 0 || pessoas.length === 0) {
        console.log("Cadastre pelo menos um produto e uma pessoa antes de sortear.");
      } else {
        let numeroSorteado = gerarNumeroAleatorio(0, produtos.length - 1);
        let pessoaSorteada = pessoas[gerarNumeroAleatorio(0, pessoas.length - 1)];

        console.log(`A pessoa sorteada (${pessoaSorteada}) ganhou o produto: ${produtos[numeroSorteado]}`);
      }
      break;

    case 4:
      console.log("Saindo do programa.");
      break;

    default:
      console.log("Opção inválida. Escolha novamente.");
      break;
  }
}
