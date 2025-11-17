
import readlineSync = require("readline-sync")

const item = readlineSync.question("Digite uma palavra ou um numero para verificar se e um palindromo: ")

function palindrome(str: string) {
  let reversed = str.split('').reverse().join('');    
    return str === reversed;
}

const isPalindrome = palindrome(item);

if(isPalindrome){
    console.log("Esta palavra e/ou número é um palíndromo!")
    
 }else{
    console.log("Esta palavra e/ou número NÂO é um palíndromo!")
}

// Codigo com erro proposital
// Falta normalizar a string (Remover espaços, deixar tudo minúsculo e remover acentos (opcional))
// Erro dando com letra Maiuscula