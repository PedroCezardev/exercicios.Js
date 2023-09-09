const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", function(frase) {
    if (ehPalindromo(frase)) {
        console.log("A frase é um palíndromo.");
    } else {
        console.log("A frase NÃO é um palíndromo.");
    }
    rl.close();
});

function ehPalindromo(palavra) {
    // Removendo espaços e convertendo para letras minúsculas
    var palavraFormatada = palavra.replace(/\s+/g, '').toLowerCase();

    var totalDeLetras = palavraFormatada.length;
    var letrasAConferir = Math.floor(totalDeLetras / 2);
    
    for (var i = 0; i < letrasAConferir; i++) {
        var letra = palavraFormatada[i];
        var indiceAComparar = totalDeLetras - 1 - i;
        var letraAComparar = palavraFormatada[indiceAComparar];
        if (letra !== letraAComparar) {
            return false;
        }
    }
    return true;
}