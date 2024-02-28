
const userWord = prompt('Inserisci una parola per sapere se è palindroma');


function palindrome(userWord) {

  let letters = userWord.split('');
  // console.log(letters);

  let lettersBack = letters.toReversed();
  // console.log(lettersBack);

  let reverseUserWord = lettersBack.join('');
  // console.log(reverseUserWord);

  let message = '';


  if (reverseUserWord === userWord) {
      return message = `La parola ${userWord} è palindroma`
  }else {
      return message = `La parola ${userWord} non è palindroma`
  }
}

alert(palindrome(userWord))
console.log(palindrome(userWord));