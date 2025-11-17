
import readlineSync = require("readline-sync")

const item = readlineSync.question("Digite uma palavra ou um numero para verificar se e um palindromo: ")

function palindrome(str: string) {
  let reversed = str.split('').reverse().join('');    
    return str === reversed;
}

if(item !== null){
    console.log("Esta palavra e/ou número é um palíndromo!")
    
 }else{
    console.log("Esta palavra e/ou número NÂO é um palíndromo!")
}


// EU CRIEI A FUNÇÃO PALINDROME MAS NÃO CHAMEI ELA 
// readlineSync.question() sempre retorna uma string, mesmo que vazia "" - !== NULL SEMPRE SERÁ TRUE (operador de desigualdade estrita)
// FALTA TRATAR NÚMEROS
// Falta normalizar a string (Remover espaços, deixar tudo minúsculo e remover acentos (opcional))