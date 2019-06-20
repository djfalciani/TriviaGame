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
    {question: "Dobby the House Elf makes his first apperance in which Harry Potter Book?",
     choices: {
         a: "Book 1",
         b: "Book 2",
         c: "Book 3",
         d: "Book 4"
     },
     answer: "b"
    },
    // Question 2
    {question: "Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?",
     choices: {
         a: "Hippogriffs",
         b: "Centaurs",
         c: "Thestrals",
         d: "Manticores"
     },
     answer: "c"
    },
    // Question 3
    {question: "Who is the Hufflepuff house ghost?",
     choices: {
         a: "Cuthbert Binns",
         b: "Sir Patrick Delaney-Podmore",
         c: "The Fat Friar",
         d: "The Grey Lady"
     },
     answer: "c"
    },
    // Question 4
    {question: "Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?",
     choices: {
         a: "Armando Dippet",
         b: "Albus Dumbledore",
         c: "Phineas Nigellus Black",
         d: "Brutus Scrimgeour"
     },
     answer: "a"
    },
    // Question 5
    {question: "What is the name of the room Harry uses to teach Dumbledore's Army?",
     choices: {
         a: "The Restricted Section of the Library",
         b: "Just in Time Room",
         c: "The Room of Requirement",
         d: "The Prefect's Bathroom"
     },
     answer: "c"
    }
]

var intervalId;
var playMode = false;
var TimeLimit = 30
var second = TimeLimit;

var lastQuestionIndex = trivia.length -1;
var currentQuestionIndex = 0;

var totalQuestions = trivia.length;
var currentQuestion = 1;

var totalCorrectQuestionCount = 0;
var totalWrongQuestionCount = 0;

$("#startGame").on("click", function() {
    // Flag User as playing game...
    playMode = true;
    document.getElementById("startGame").disabled = true;

    
    // Display 1st Question...
    renderQuestion();
});

$("#stopGame").on("click", function() {
    stop();
});

$("#resetGame").on("click", function() {
    resetTimer();
});

$("#newQuestion").on("click", function() {
    renderQuestion();
    // Update current Question Index & Variable..
    updateCurrentQuestionIndex();
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

    // Display Result Card...
    // renderResultCard();

    // Check if we have are on last question...
    if (currentQuestionIndex ==lastQuestionIndex) {
        //Game Over...Display Score Page...
        alert("Game Over!");
        renderScoreBoard();
        resetQuiz();

    }
    else {
        // Update current Question Index & Variable..
        updateCurrentQuestionIndex();
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
        checkAnswer("");
        // renderQuestion();

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
    second = TimeLimit;
    clearInterval(intervalId);
    $("#timeTracker").empty();
}

// function progress() {
//     for (key in )
// }

function resetQuiz() {
    //Clear Timer...
    resetTimer();

    // Clear QuizBoard
    $("#progress").text("");
    $("#question").text("");
    $("#A").text("");
    $("#B").text("");
    $("#C").text("");
    $("#D").text("");

    // $("#quizBoard").empty();

    // Reset Global Variables...
    totalWrongQuestionCount = 0;
    totalCorrectQuestionCount = 0;
    currentQuestionIndex = 0;
    lastQuestionIndex = trivia.length -1;
    currentQuestion = 1;

    // Enable Play Button...
    document.getElementById("startGame").disabled = false;

    // Disable the Restart Btn
    document.getElementById("reset-game").disabled = true;
    $("#reset-game").css("display", "none");

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
    // Display Block
    $("#quizBoard").css("display","block");
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
}

function renderScoreBoard() {
    // Hide Board, and display Recap
    $("#quizBoard").css("display","none");
    $("#recapCard").css("display","block");

    // Enabled and display Reset Game btn
    $("#reset-game").css("display", "flex")
    document.getElementById("reset-game").disabled = true;


    // Display Scores...
    // $("#recapCard").html("<h1>End of Game!</h1>");
    $("#recap-title").text("End of Game!")
    $("#correct-result").text("Correct: " + totalCorrectQuestionCount);
    $("#incorrect-result").text("Correct: " + totalWrongQuestionCount);
}

function renderResultCard() {
    $("#quizBoard").css("display","none");
    $("#recapCard").css("display","none");
    $("#resultCard").css("display","block");

}
