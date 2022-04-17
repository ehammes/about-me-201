'use strict';

let score = 0;

let aboutmeVisitor = prompt('Welcome! What is your name?');
alert('Hello ' + aboutmeVisitor + ', do you want to play a guessing game about me? Please enter each response with a yes or no.');

// question #1
// function - input, processing, output. The prompt below is our input.
function q1 (){
  let questionOne = prompt('Do I live in Seattle?').toLowerCase();

  if(questionOne === 'yes' || questionOne === 'y'){
    score = score + 1;
    alert('Yes, that is correct!');
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('That is incorrect. I do live in Seattle.');
  } else {
    alert('Please enter responses with a yes or no.');
  }
}

q1();

// question #2
function q2 (){
  let questionTwo = prompt('Did I attend the University of Dayton?').toLowerCase();

  if(questionTwo === 'yes' || questionTwo === 'y'){
    score = score + 1;
    alert('Yes, you are correct! I did attend UD, go flyers!');
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('Sorry, that is incorrect. I did attend UD.');
  } else {
    alert('Please enter responses with a yes or no.');
  }
}

q2();

// question #3
function q3 (){
  let questionThree = prompt('Do I have a cat?').toLowerCase();

  if(questionThree === 'no' || questionThree === 'n'){
    score = score + 1;
    alert('That is correct! I do not own a cat, but I do have a cute dog!');
  } else if (questionThree === 'yes' || questionThree === 'y') {
    alert('That is incorrect. I have a dog named Duke.');
  } else {
    alert('Please enter responses with a yes or no.');
  }
}

q3();

//question #4
function q4(){
  let questionFour = prompt('Is my dog Duke a chocolate labrador?').toLowerCase();

  if(questionFour === 'no' || questionFour === 'n'){
    score = score + 1;
    alert('Correct, he is a yellow labrador retriever.');
  } else if (questionFour === 'yes' || questionFour === 'y') {
    alert('No, Duke is not a chocolate labrador.');
  } else {
    alert('Please enter responses with a yes or no.');
  }
}

q4();

//question #5
function q5(){
  let questionFive = prompt('Am I excited to be coding?').toLowerCase();

  if(questionFive === 'yes' || questionFive === 'y'){
    score = score + 1;
    alert('Yes that\'s correct! Thanks for playing ' + aboutmeVisitor + '!');
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert('Sorry, that is incorrect. Thanks for playing ' + aboutmeVisitor + '!');
  } else {
    alert('Please enter responses with a yes or no.');
  }
}

q5();

// question #6: collaborated with Guy, David, Katharine, and Vinny on the below for lab03
function q6(){
  let correctAnswer = 12;
  for(let i = 0; i < 4; i++) {
    let questionSix = parseInt(prompt('Can you guess my favorite number?'));
    if (questionSix === correctAnswer){
      score = score + 1;
      alert (`${aboutmeVisitor}, that is correct!`);
      break;
    } else if (questionSix > correctAnswer){
      alert (`${aboutmeVisitor}, that number is too high. Please try again.`);
    } else if (questionSix < correctAnswer){
      alert (`${aboutmeVisitor}, that number is too low. Please try again.`);
    } if (i === 3 && questionSix !== correctAnswer) {
      alert (`${aboutmeVisitor}, that was your last attempt. The correct answer was 12.`);
    }
  }
}

q6();

// question #7
function q7(){
  let statesAnswer = ['washington', 'california', 'illinois', 'ohio', 'south carolina'];
  for(let i = 0; i < 6; i++){
    let questionSeven = prompt('Name a state that I have lived in.').toLowerCase();
    for(let j = 0; j < statesAnswer.length; j++){
      if (questionSeven === statesAnswer[j]){
        score = score + 1;
        alert(`${aboutmeVisitor}, that is correct!`);
        i = 6;
        break;
      }
    }
  }
  alert(`I have lived in the following places: ${statesAnswer}`);
}

q7();

alert(`${aboutmeVisitor}, you got ${score} question(s) right!`);
