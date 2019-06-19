// Global Variables
var trivia = {
    triv1 : {
        question    : "What is 1 + 2?",
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        answer : "C"
    },
    triv2 : {
        question    : "What is 3 + 4?",
        choices : {
            a:6,
            b:7,
            c:8,
            d:9
        },
        answer: 'b'
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

$("#newQuestion").on("click", function() {
    renderQuestion();
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

function renderQuestion() {
    // Display Question
    var Question = trivia.triv1.question;
    $("#question").text(Question);

    // Loop through Answers, and Display
    var listGroup = $('<ul class="list-group">');
    var listItem = $('<li class="list-group-item">');
    
    $("#answers").append(listGroup)
    listGroup.append(listItem)
    
    //var xTest = trivia.triv2.choices.a;
    
    for (key in trivia.triv1) {
        console.log(trivia.triv1.choices[key]);
    }
    
    // $("#answers").
    
    // <ul class="list-group">
    //     <li class="list-group-item">Cras justo odio</li>
    //     <li class="list-group-item">Dapibus ac facilisis in</li>
    //     <li class="list-group-item">Morbi leo risus</li>
    //     <li class="list-group-item">Porta ac consectetur ac</li>
    //     <li class="list-group-item">Vestibulum at eros</li>
    // </ul>

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