import readlineSync = require("readline-sync");

const item = readlineSync.question("Digite uma palavra ou um numero para verificar se e um palindromo: ");

function palindrome(str: string): boolean {

    // Normalização opcional (remove espaços e acentos, deixa minúsculo)
    const normalized = str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[\W_]/g, "");         // remove espaços e símbolos não alfanuméricos

    // Inverte o texto
    const reversed = normalized.split('').reverse().join('');

    return normalized === reversed;
}

const isPalindrome = palindrome(item);

if (isPalindrome) {
    console.log("Esta palavra e/ou número é um palíndromo!");
} else {
    console.log("Esta palavra e/ou número NÃO é um palíndromo!");
}
