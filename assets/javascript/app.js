// Global Variables
// var trivia = {
//     triv1 : {
//         question    : "What is 1 + 2?",
//         A: 1,
//         B: 2,
//         C: 3,
//         D: 4,
//         answer : "C"
//     },
//     triv2 : {
//         question    : "What is 3 + 4?",
//         choices : {
//             a:6,
//             b:7,
//             c:8,
//             d:9
//         },
//         answer: 'b'
//     }
// }

var trivia = [
    // Question 1
    {question: "what is 1+2?",
     choices: {
         a: 1,
         b: 2,
         c: 3,
         d: 4
     },
     answer: "c"
    },
    // Question 2
    {question: "what is 2+3?",
     choices: {
         a: 3,
         b: 4,
         c: 5,
         d: 6
     },
     answer: "c"
    },
    // Question 3
    {question: "what is 3+4?",
     choices: {
         a: 5,
         b: 6,
         c: 7,
         d: 8
     },
     answer: "c"
    },
    // Question 4
    {question: "what is 4+5?",
     choices: {
         a: 7,
         b: 8,
         c: 9,
         d: 10
     },
     answer: "c"
    },
    // Question 5
    {question: "what is 5+6?",
     choices: {
         a: 9,
         b: 10,
         c: 11,
         d: 12
     },
     answer: "c"
    }
]

var intervalId;
var timerOn = false;
var second = 30;

var lastQuestionIndex = trivia.length -1;
var currentQuestionIndex = 0;

var totalQuestions = trivia.length;
var currentQuestion = 1;

var totalCorrectQuestionCount = 0;
var totalWrongQuestionCount = 0;

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

// On Click of Choices...
$("#A").on("click", function(){checkAnswer("a")});
$("#B").on("click", function(){checkAnswer("b")});
$("#C").on("click", function(){checkAnswer("c")});
$("#D").on("click", function(){checkAnswer("d")});

function checkAnswer(letter) {
    if (trivia[currentQuestionIndex].answer == letter) {
        // Correct Answer...
        updateCorrectAnswerTotal();
        alert("Correct!");
    }
    else {
        updateWrongAnswerTotal();
        alert("Incorrect!");
    }

    // Check if we have are on last question...
    if (currentQuestionIndex ==lastQuestionIndex) {
        //Game Over...Display Score Page...

    }
    else {
        renderQuestion();
    }

}

function timer() {
    second--;
    
    if (second == 0) {
        alert("Time Up!")
        resetTimer();
        // If we get here, then user didn't answer so call wrong answer
        updateWrongAnswerTotal();
        // Call Next Question...
        renderQuestion();

    } else {
        $("#timeTracker").text("Time Remaining: " + second);
    }
}

function startTimer() {
    $("#timeTracker").text("Time Remaining: " + second);
    intervalId = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function resetTimer() {
    second = 30;
    clearInterval(intervalId);
    $("#timeTracker").empty();
}

// function progress() {
//     for (key in )
// }

function resetQuiz() {
    totalWrongQuestionCount = 0;
    totalCorrectQuestionCount = 0;
}

function updateWrongAnswerTotal() {
    totalWrongQuestionCount++;
}

function updateCorrectAnswerTotal() {
    totalCorrectQuestionCount++;
}

function updateCurrentQuestionIndex() {
    currentQuestionIndex++;
    currentQuestion++;
}

function renderQuestion() {
    
    // Display Timer:
    resetTimer();
    startTimer();
    
    //Display Progress
    $("#progress").text("Question: " + currentQuestion + " of " + totalQuestions);
    
    // Display Question
    var Question = trivia[currentQuestionIndex];
    $("#question").text(Question.question);
    
    // Display Choices...
    for (key in Question.choices) {
        var mc = Question.choices[key];
        console.log(key);
        switch (key) {
            case "a":
                $("#A").text(mc);
                break;
                case "b":
                    $("#B").text(mc);
                    break;
                    case "c":
                        $("#C").text(mc);
                        break;
                        case "d":
                            $("#D").text(mc);
                            break;
                        }
                    }
                    
    // Update current Question Index & Variable..
    updateCurrentQuestionIndex();


    // Loop through Answers, and Display
    // var listGroup = $('<ul class="list-group">');
    // var listItem = $('<li class="list-group-item">').text(trivia.triv1.A);
    // var listItem = $('<li class="list-group-item">').text(trivia.triv1.A);
    
    // $("#answers").append(listGroup);
    // listGroup.append(listItem);
    
    // for (var keys in trivia.triv2.choices) {
    //     var listItem = $('<li class="list-group-item">').text(trivia.triv2.choices[keys]);
    //     // var txt2 = $("<p></p>").text(trivia[keys].question);
    //     listGroup.append(listItem);
    // }
    
    //var xTest = trivia.triv2.choices.a;
    
    // for (key in trivia.triv1) {
    //     console.log(trivia.triv1.choices[key]);
    // }
    
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
// var Test = trivia.triv1.question;

// for (var keys in trivia) {
//     console.log(trivia[keys].question);
//     var txt2 = $("<p></p>").text(trivia[keys].question);
//     $("#question").append(txt2);
// }
// var Test2 = trivia[triv1].question;
// console.log(Test);
// console.log(Test2);

// console.log(trivia[triv1].question);
// console.log(trivia[triv1].answer);