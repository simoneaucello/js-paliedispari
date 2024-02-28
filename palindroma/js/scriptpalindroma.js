
const userWord = prompt('Inserisci una parola per sapere se è palindroma');



function palindrome(userWord) {

  for (let i = 0; i < userWord.length / 2; i++){
  if(userWord[i] !== userWord[userWord.length - i -1]){
    return false;
  } 
}
    return true;
}


if (palindrome(userWord)) {
  alert(`La parola ${userWord} è palindroma`)
}else {
  alert(`La parola ${userWord} non è palindroma`)
}



