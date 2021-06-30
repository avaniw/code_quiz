var time = 5;
var currentQuestionsIndex = 0;

var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var titleElement = document.querySelector("#question-title");

function startQuiz () {
    startScreen.setAttribute("class", "hide");
     questionsElement.removeAttribute("class");
    timer = setInterval(countdown, 1000);
    getCurrentQuestion();
}


function countdown () {
    
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
        end();
    }
}






function end () {
    
    clearInterval(timer);
    
    var endDiv = document.getElementById("end-screen");
    endDiv.removeAttribute("class");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
}




function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionsIndex];
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = "";

    for (let i = 0; i < currentQuestion.choice.length; i++) {
        let choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);
        choiceNode.textContent = currentQuestion.choice[i];
        choiceNode.addEventListener("click", nextQuestion)
        questionChoices.appendChild(choiceNode);
}
}
function questionClick() { if (this.value !== questions[currentQuestionIndex].answer) { 
}


}
startBtn.addEventListener("click", startQuiz)