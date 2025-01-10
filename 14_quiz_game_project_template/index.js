/*Dette er en web app som henter quiz sprøgsmål fra et api og stiller dem på skærmen, hvor brugeren skal trykke på de rigtige svar.  */
let amount = 1
let category = 12
let difficulty = "medium"
let type = "boolean"

let apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

function setup() {
  noCanvas() // p5.js setup without canvas
  fetchQuizQuestion()
}


async function fetchQuizQuestion() {
  // to trin henter data fra API
  // først beder vi serveren om at få lov at hente data
 let result = await fetch(apiUrl)
 // hvis response objektet er ok...
 if(result.ok){
  let quizQuestion = await result.json()
  //console.log(quizQuestion)
  let question = quizQuestion.results[0]
  showQuestion(question)
}else{
   console.log('der var en fejl i hentningen af data')
 }

}

function showQuestion(q){
  console.log(q)
  select('#questionDiv').html(q.question)
  showAnswers(q)
}

let trueButton, falseButton;

function showAnswers(q){
  trueButton = createButton('True');
  falseButton = createButton('False');

  trueButton.mousePressed(()=> checkAnswer(q, "true"));
  falseButton.mousePressed(()=> checkAnswer(q, "false"));

  select('main').child(trueButton);
  select('main').child(falseButton);
}


function checkAnswer(q, answer) {
  trueButton.removeClass('correct');
  falseButton.removeClass('wrong');
  trueButton.removeClass('wrong');
  falseButton.removeClass('correct');
  // Check if the user's answer matches the correct answer from the quiz question
  if (q.correct_answer.toLowerCase() === answer.toLowerCase()) {
    // If the user's answer is correct, add 'correct' class to the selected button
    if (answer === "true") {
      trueButton.addClass('correct');
      falseButton.addClass('wrong');
    } else {
      trueButton.addClass('wrong');
      falseButton.addClass('correct');
    }
  } else {
    // If the user's answer is wrong, add 'wrong' class to the selected button
    if (answer === "true") {
      trueButton.addClass('wrong');
      falseButton.addClass('correct');
    } else {
      trueButton.addClass('correct');
      falseButton.addClass('wrong');
    }
  }
}




