// Atividade 05 de JavaScript: programa que armazena notas de Estudantes e retorna a media semestral e diz se foi 'aprovado', 'reprovado' ou fico em 'recuperação'.
// Pedro Cezar Alves da Silva Beserra

const alunos = [];

function calcularDesempenho(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

while (true) {
  console.log("\nMenu de Opções do nosso Sistema Acadêmico:");
  console.log("1. Cadastrar Aluno(a)");
  console.log("2. Cadastrar Notas");
  console.log("3. Exibir Boletim");
  console.log("4. Sair");

  const opcao = Number(prompt("Escolha uma opção:"));

  
  switch (opcao) {
    
    case 1:
      const nomeAluno = prompt("Digite o nome do(a) Estudante:"); 
      alunos.push({ nome: nomeAluno, notas: [] });  
      console.log(`Estudante(a) "${nomeAluno}" cadastrado com sucesso!`);  
      break;


    case 2:
      const nomeAlunoNotas = prompt("Digite o nome do(a) Estudante para cadastrar notas:");
      const aluno = alunos.find((a) => a.nome === nomeAlunoNotas); 


      if (aluno) {
        const notas = [];
        

        for (let i = 0; i < 3; i++) {
          let nota;

          do {
            let nota = Number(prompt(`Digite a nota ${i + 1} do(a) ${nomeAlunoNotas}:`)); 
            notas.push(Math.round(nota)); 
            
          } while (nota <= 10 && nota >= 0);
        }
        aluno.notas = notas; 
        console.log("Notas cadastradas com sucesso!");
        
      } else {
        console.log("Aluno(a) não encontrado. Por favor, digite o nome de um(a) aluno(a) já cadastrado(a");
        console.log("Caso não tenha cadastrado ainda, cadastre um aluno no menu de opções");}
      break;

    
    case 3:
      const nomeAlunoBoletim = prompt("Digite o nome do(a) aluno(a) para exibir o boletim:"); 
      const alunoBoletim = alunos.find((a) => a.nome === nomeAlunoBoletim); 


      if (alunoBoletim) {
        const media = Math.round(alunoBoletim.notas.reduce((acc, nota) => acc + nota, 0) / alunoBoletim.notas.length); 
        
        const desempenho = calcularDesempenho(media); 
        
        console.log(`Nome: ${alunoBoletim.nome}`); 
        console.log(`Notas arredondadas: ${alunoBoletim.notas.join(", ")}`);
        console.log(`Média: ${media}`);
        console.log(`Desempenho: ${desempenho}`);

   
      } else {
        console.log("Aluno não encontrado.");}
      break;

   
    case 4:
      console.log("Encerrando o programa!");
      process.exit(0);

  
    default:
      console.log("Opção inválida. Escolha uma opção entre 1 e 4.");
  }
}