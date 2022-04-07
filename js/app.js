'use strict';

let aboutmeVisitor = prompt('Welcome! What is your name?');
// console.log('User\'s name is ' + aboutmeVisitor);
alert('Hello ' + aboutmeVisitor + ', do you want to play a guessing game about me? Please enter each response with a yes or no.');

let questionOne = prompt('Do I live in Seattle?').toLowerCase();
// console.log('User\'s response to question 1 was ' + questionOne);

if(questionOne === 'yes' || questionOne === 'y'){
  alert('Yes, that is correct!');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('That is incorrect. I do live in Seattle.');
} else {
  alert('Please enter responses with a yes or no.');
}

let questionTwo = prompt('Did I attend the University of Dayton?').toLowerCase();
// console.log('User\'s response to question 2 was ' + questionTwo);

if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Yes, you are correct! I did attend UD, go flyers!');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('Sorry, that is incorrect. I did attend UD.');
} else {
  alert('Please enter responses with a yes or no.');
}

let questionThree = prompt('Do I have a cat?').toLowerCase();
// console.log('User\'s response to question 3 was ' + questionThree);

if(questionThree === 'no' || questionThree === 'n'){
  alert('That is correct! I do not own a cat, but I do have a cute dog!');
} else if (questionThree === 'yes' || questionThree === 'y') {
  alert('That is incorrect. I have a dog named Duke.');
} else {
  alert('Please enter responses with a yes or no.');
}

let questionFour = prompt('Is my dog Duke a chocolate labrador?').toLowerCase();
// console.log('User\'s response to question 4 was ' + questionFour);

if(questionFour === 'no' || questionFour === 'n'){
  alert('Correct, he is a yellow labrador retriever.');
} else if (questionFour === 'yes' || questionFour === 'y') {
  alert('No, Duke is not a chocolate labrador.');
} else {
  alert('Please enter responses with a yes or no.');
}

let questionFive = prompt('Am I excited to be coding?').toLowerCase();
// console.log('User\'s response to question 5 was ' + questionFive);

if(questionFive === 'yes' || questionTwo === 'y'){
  alert('Yes that\'s correct! Thanks for playing ' + aboutmeVisitor + '!');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('Sorry, that is incorrect. Thanks for playing ' + aboutmeVisitor + '!');
} else {
  alert('Please enter responses with a yes or no.');
}

// collaborated with Guy, David, Katharine, and Vinny on the below for lab03
let attempts = 4;

for(let i = 0; i < attempts; i++) {
  let correctAnswer = 12;
  let questionSix = prompt('Can you guess my favorite number?');
  if (questionSix === correctAnswer){
    alert (`${aboutmeVisitor}, that is correct!`);
  } else if ((questionSix > correctAnswer) && (i <= attempts-2)){
    alert (`${aboutmeVisitor}, that number is too high. Please try again.`);
  } else if ((questionSix < correctAnswer) && (i <= attempts-2)){
    alert (`${aboutmeVisitor}, that number is too low. Please try again.`);
  } else {
    alert (`${aboutmeVisitor},that was your last attempt. The correct answer is 12.`);
  }
}

let statesAnswer = ['washington', 'california', 'illinois', 'ohio', 'south carolina'];

for(let i = 0; i < 7; i++) {
  let questionSeven = prompt('Name a state that I have lived in.').toLowerCase();
  if (questionSeven === (statesAnswer[0] || statesAnswer[1] || statesAnswer[2] || statesAnswer[3] || statesAnswer[4])){
    alert(`${aboutmeVisitor}, that is correct!`);
    break;
  } else if ((questionSeven !== (statesAnswer[0] || statesAnswer[1] || statesAnswer[2] || statesAnswer[3] || statesAnswer[4]) && (i <= 5))){
    alert(`${aboutmeVisitor}, that is incorrect. Please try again.`);
  } else {
    alert(`${aboutmeVisitor},that was your last attempt. The correct answers are ${statesAnswer}`);
  }
}

alert (`${aboutmeVisitor} you got X number of questions right`);
