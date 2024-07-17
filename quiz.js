
function checkAnswer() {
  var correctAnswer = "4";
  var userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
  var feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", checkAnswer);
