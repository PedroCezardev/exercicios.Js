// Atividade 6 de JavaScript: Algoritomo que armazena informações de livros e autores e retorna opções de Cadastrar livro, Alterar, Deletar, Realizar emprestimo e devolver o livro.
// Pedro Cezar Alves da Silva Beserra.

const biblioteca = [];
let proximoID = 1;


function menu() {
  console.log("\n===== Menu Principal =====");
  console.log("1. Cadastrar Livro");
  console.log("2. Alterar Livro");
  console.log("3. Deletar Livro");
  console.log("4. Realizar Empréstimo de Livro");
  console.log("5. Devolver Livro");
  console.log("6. Sair");
}

// Função para cadastrar um novo livro
function cadastroLivro() {
  const titulo = prompt("Digite o título do livro:");
  const autor = prompt("Digite o autor do livro:");
  const id = proximoID++; // Usar o valor atual de proximoID e depois incrementá-lo
  const emprestado = false;

  const livro = {
    id,
    titulo,
    autor,
    emprestado
  };

  biblioteca.push(livro);
  console.log("Livro cadastrado com sucesso!");
  console.log(`ID do livro cadastrado: ${id}`);
}


// Função para alterar um livro existente
function alterarLivro() {
  const id = parseInt(prompt("Digite o ID do livro que deseja alterar:"));

  const livro = biblioteca.find(l => l.id === id);

  if (livro) {
    const novoTitulo = prompt("Digite o novo título:");
    const novoAutor = prompt("Digite o novo autor:");

    if (novoTitulo !== "") {
      livro.titulo = novoTitulo;
    }

    if (novoAutor !== "") {
      livro.autor = novoAutor;
    }

    console.log("Livro alterado com sucesso!");
  } else {
    console.log("Livro não encontrado.");
  }
}

// Função para deletar um livro
function deletarLivro() {
  const id = parseInt(prompt("Digite o ID do livro que deseja deletar:"));

  const index = biblioteca.findIndex(l => l.id === id);

  if (index !== -1) {
    biblioteca.splice(index, 1);
    console.log("Livro deletado com sucesso!");
  } else {
    console.log("Livro não encontrado.");
  }
}

// Função para realizar o empréstimo de um livro
function realizarEmprestimo() {
  const id = parseInt(prompt("Digite o ID do livro que deseja emprestar:"));

  const livro = biblioteca.find(l => l.id === id);

  if (livro) {
    if (!livro.emprestado) {
      livro.emprestado = true;
      console.log("Livro emprestado com sucesso!");
    } else {
      console.log("Este livro já está emprestado.");
    }
  } else {
    console.log("Livro não encontrado.");
  }
}

// Função para devolver um livro emprestado
function devolverLivro() {
  const id = parseInt(prompt("Digite o ID do livro que deseja devolver:"));

  const livro = biblioteca.find(l => l.id === id);

  if (livro) {
    if (livro.emprestado) {
      livro.emprestado = false;
      console.log("Livro devolvido com sucesso!");
    } else {
      console.log("Este livro não está emprestado.");
    }
  } else {
    console.log("Livro não encontrado.");
  }
}

// Laço de repetição para exibir o menu principal e executar ações
let escolha;
do {
  exibirMenu();
  escolha = prompt("Escolha uma opção (1-6):");

  switch (escolha) {
    case "1":
      cadastrarLivro();
      break;
    case "2":
      alterarLivro();
      break;
    case "3":
      deletarLivro();
      break;
    case "4":
      realizarEmprestimo();
      break;
    case "5":
      devolverLivro();
      break;
    case "6":
      console.log("Encerrando programa, volte sempre!");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (escolha !== "6");
