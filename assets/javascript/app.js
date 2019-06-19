// Global Variables
var trivia = {
    triv1 : {
        question    : "What is 1 + 2?",
        answer : [1,2,3,4,5] 
    },
    triv2 : {
        question    : "What is 3 + 4?",
        answer : [6,7,8,9,10] 
    }
}

var intervalId;
var timerOn = false;
var second = 60;

$("#startGame").on("click", function() {
    startTimer();
});

$("#stopGame").on("click", function() {
    stop();
});

$("#resetGame").on("click", function() {
    resetTimer();
});

function timer() {
    second--;
    
    if (second == 0) {
        alert("Time Up!")
        resetTimer();
    } else {
        $("#timeTracker").text("Time Remaining: " + second);
    }
}

function startTimer() {
    intervalId = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function resetTimer() {
    second = 60;
    clearInterval(intervalId);
    $("#timeTracker").empty();
}

// Test #1 - Display the Question in the Question Div, Display Answers in Answer Div...
// $("#question").text(trivia[triv1].question);
// $("#answers").text(trivia[triv1].answer);
var Test = trivia.triv1.question;

for (var keys in trivia) {
    console.log(trivia[keys].question);
    $("#question").text(trivia[keys].question);
}
// var Test2 = trivia[triv1].question;
// console.log(Test);
// console.log(Test2);

// console.log(trivia[triv1].question);
// console.log(trivia[triv1].answer);