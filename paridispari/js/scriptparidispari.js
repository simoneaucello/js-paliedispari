
const podUser = prompt('Scegli Pari o Dispari').toLowerCase();
const numUser = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(numUser);

const numPc = generateNumber(1,5);
console.log(numPc);

let sum = numUser + numPc
console.log(sum);



///// FUNCTION /////

function generateNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function result(sum){

  if(sum % 2 === 0){
    return 'pari'
  }else if(sum % 2 !== 0){
    return 'dispari'
  }
}

console.log(result(sum));

if (result(sum) === podUser) {
  alert('You win!')
} else {
  alert('You lose!')
}
