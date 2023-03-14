// Exercice 1 

function myLength(string) {

let length = 0;

for(let str of string){

    length++;
}
console.log(length);
}

myLength()

// Exercice 2

function myTrim(string) {

  let space = " ";
  let start = 0;
  let end = string.length - 1;
  
  while (string[start] === space) {
    start++;
  }
  
  while (string[end] === space) {
    end--;
  } 
  console.log(string.slice(start, end + 1));
}

myTrim()

// Exercice 1 Bis

function ex1bis (){

  let nombre = -1;

  let random = Math.floor(Math.random() * 3)+1 ;
    
  while (nombre !== random) {

   nombre = parseInt(prompt('Donnez un nombre entre 1 et 3 '));
  }
  console.log("Bravo vous avez deviné le nombre " + random);
}

ex1bis()

// Exercice 2 Bis

function ex2bis() {

  const nombreRandom = Math.floor(Math.random() * 20) + 10;

  let nombre = -1;

  while (nombre !== nombreRandom ) {

  nombre = parseInt(prompt("Devinez un chiffre entre 10 et 20"));

  if (nombre < nombreRandom) {
    
    console.log("plus grand.");

  } else if (nombre > nombreRandom) {

    console.log("plus petit");
  }
  console.log('Bravo!'+'👏');
}
}

ex2bis()

// Exercice 3

function ex3bis() {

  let nombre = parseInt(prompt("Donnez un chiffre"));
  let i = nombre + 1;
  let count = 0;

  while (count < 10) {
    console.log(i);
    i++;
    count++;
  }
}

ex3bis()

// Exercice 4

function ex4(nombre) {
  for (let i = nombre + 1; i <= nombre + 10; i++) {
    console.log(i);
  }
}

ex4()

// Exercice 5

function ex5() {

  let nombre = parseInt(prompt("Donnez un chiffre et je te donne sa table de multiplication !"));

  for ( let i = 1 ; i < 10 ; i++){
    console.log( nombre+'x'+i+'='+nombre* i);
  }
}

ex5()

// Exercice 6

function ex6() {

  let nombre = parseInt(prompt("Donnez un nombre"));

  let result = 0;
    
  for ( var i = 0 ; i<= nombre ; i++) {
    
    result+= i; 
  }
  console.log(result)
}

ex6()

// Exercice 7

function ex7(){

  let number = parseInt(prompt("Factoriel d'un nombre "));

  let fact = 1;

  for ( var i = 1 ; i <= number ; i++) {
    fact *= i;
  }
  console.log(fact);
}

ex7()

// Exercice 8

function ex8() {

  let qst = 20; 

  let notes = [];

  for ( var i = 1 ; i <= qst ; i++){

    let note = parseInt(prompt("donne un nombre "+ i));

    notes.push(note);
  }

  let max = Math.max(...notes);

  let position = notes.indexOf(max)+ 1;
    
  console.log('le plus grand nombre est '+max +" c'était le numéro "+ position);

}

ex8()

// Exercice 9

function ex9() {

  let notes = [];

  let qst
  
  while(qst !== 0) {

    qst = parseInt(prompt("donne un nombre "));
    notes.push(qst); 
  }

  let max = Math.max(...notes);
      
  let position = notes.indexOf(max)+ 1;
      
  console.log('le plus grand nombre est '+max +" c'était le numéro "+ position);
}

ex9()

// Exercice 10

function ex10 (n) {
  let somme = 0;
  
  for (let i = 1; i <= n; i++) {
    somme += 100 + (2 * i);
  }
  console.log(somme +'💲');
}

ex10()

// FIN 🇩🇿 😁