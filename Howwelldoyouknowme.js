var score =0;
function answerchecker(question, answer){
  var readlineSync = require('readline-sync');
  var output = readlineSync.question(question);
  if (output.toUpperCase()==answer.toUpperCase()){
    score += 1;
    console.log('correct answer');
    console.log('current score: ',score);
  }
  else{
    console.log('incorrect answer');
    console.log('current score: ',score);  
  }
}


questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "ninja turtle"
}

questionTwo = {
  question: "what is my official name? ",
  answer: "gunish"
}

var objectArray  = [questionOne,questionTwo];

console.log("Welcome to the 2 question quiz :");

for (var i=0;i<objectArray.length;i++){
  answerchecker(objectArray[i].question,objectArray[i].answer);
}

console.log("this is your final score out of 2 :" , score);


