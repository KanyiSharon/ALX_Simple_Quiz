function checkAnswer(){
  var correctAnswer="4";
  var userAnswer=document.querySelector('input[name="quiz"]:checked')?.value;
  if(userAnswer==correctAnswer){
    var feedback=document.querySelector('#feedback');
    feedback.textContent = "Correct! Well done.";
}else{
  feedback.textContent ="That's incorrect. Try again!";
}
}
var submitButton=document.querySelector('#submit');
submitButton.addEventListener('click',checkAnswer)
