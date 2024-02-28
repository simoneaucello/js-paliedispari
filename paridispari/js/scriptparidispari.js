
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

function whoWin(podUser){
  let message = "";

  if (sum % 2 === 0 && podUser === 'pari' || sum % 2 !== 0 && podUser === 'dispari'){
    return message = 'You win!'
  }else {
    return message = 'You lost!'
  };
}

console.log(whoWin(podUser));
alert(whoWin(podUser))


