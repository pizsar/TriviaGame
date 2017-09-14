$(document).ready(function() {

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }


    $("body").on("click", ".start-button", function(event){
        event.preventDefault();
        generateHTML();

        timerWrapper();

    });

    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    });

    $("body").on("click", ".reset-button", function(event){
        resetGame();
    });

});

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>TOO SLOW!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Whomp Whomp! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    }
    else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>TIMES UP!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainArea").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Mimas, Enceladus, Titan, and Iapetus are moons orbiting which planet?", "Which planet has a tilted axis of 98 degrees?", "Who was the first country to launch a man-made object and land it on the moon?", "What is the name of the first U.S. space station?", "Which planet has the most oxygen?", "What does "NASA" stand for?", "Which planet is the farthest from the sun?", "What planet has the most gravity?"];
var answerArray = [["Jupiter", "Saturn", "The Milky Way", "Snickers"], ["The Moon","Mecury","Uranus","Earth"], ["United States", "United Kingdom", "China", "Soviet Union"], ["Skylab","Air Central","Infinity and Beyond","The Space Jam"], ["Venus", "Mars", "Earth", "Neptune"], ["National Aeronautics and Space Administration","I Don't Know","It's the First Option","No Air in Space Apparently"], ["Earth", "Pluto", "Mikey", "Neptune"], ["Saturn","Jupiter","The Sun","Ur anus"]];
var imageArray = ["<img class='center-block img-right' src='img/saturn.png'>", "<img class='center-block img-right' src='img/uranus.png'>", "<img class='center-block img-right' src='img/soviet union.png'>", "<img class='center-block img-right' src='img/skylab.png'>", "<img class='center-block img-right' src='img/earth.png'>", "<img class='center-block img-right' src='img/nasa.png'>", "<img class='center-block img-right' src='img/neptune.png'>", "<img class='center-block img-right' src='img/jupiter.png'>"];
var correctAnswers = ["B. Saturn", "C. Uranus", "D. Soviet Union", "A. Skylab", "C. Earth", "A. National Aeronautics and Space Administration", "D. Neptune", "B. Jupiter"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

