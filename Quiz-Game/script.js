const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const quizQuestion = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestions = document.getElementById("totalQuestions");
const scoreElement = document.getElementById("score");
const resultScreen = document.getElementById("result-screen");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

const quizQuestions = [
    {
        question: "What is the full meaning of HTML ?",
        answers: [
            {text: "Hypertext markup", correct: false},
            {text: "Hypertext markup langauage", correct: true},
            {text: "Hyper langauage", correct: false},
            {text: "Hyper Text Makeup langauage", correct: false},
        ],
    },
    {
        question: "What is the full meaning of CSS ?",
        answers: [
            {text: "Cascading style sheets", correct: true},
            {text: "Cascading stlying sheet", correct: false},
            {text: "Cascading sheets", correct: false},
            {text: "Cascading sheets styles", correct: false},
        ],
    },
    {
        question: "Which of the following is a programming language ?",
        answers: [
            {text: "CSS", correct: false},
            {text: "HTML", correct: false},
            {text: "MONGO DB", correct: false},
            {text: "JAVA SCRIPT", correct: true},
        ],
    },
    {
        question: "Which of the following is not a programming language ?",
        answers: [
            {text: "PYTHON", correct: false},
            {text: "C++", correct: false},
            {text: "REACT", correct: true},
            {text: "JAVA SCRIPT", correct: false},
        ],
    },
    {
        question: "Whats the full meaning of MERN ?",
        answers: [
            {text: "Mongodb Express React Node", correct: true},
            {text: "Mongodb Express Review Node", correct: false},
            {text: "Meta Express React Node", correct: false},
            {text: "Mongodb Express React js", correct: false},
        ],
    },
    {
        question: "Which of the following is a Javascript framework?",
        answers: [
            {text: "Mongodb", correct: false},
            {text: "Html", correct: false},
            {text: " React ", correct: true},
            {text: "tailwindCss", correct: false},
        ],
    },
]

// Event Listeners
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}

// Keep track of which question we're currently on
let currentQuestionIndex = 0;

// keep track of the score
let score = 0;

function showQuestion() {

    // Get the current question
    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionElement.textContent = currentQuestionIndex + 1;

    // Display the question in the HTML
    quizQuestion.textContent = currentQuestion.question;

    // Clear previous answers
    answersContainer.innerHTML = "";

    // Update progress bar
    const progressPercent =
        (currentQuestionIndex / quizQuestions.length) * 100;

    progress.style.width = `${progressPercent}%`;


    // Go through every answer
    currentQuestion.answers.forEach((answer, index) => {

        // Create a button
        const answerButton = document.createElement("button");

        // Put the answer text inside the button
        answerButton.textContent = answer.text;

        // Add CSS class
        answerButton.classList.add("answer-btn");
        
        answerButton.addEventListener("click", function () {

            // Check if the selected answer is correct
            if (answer.correct) {

                answerButton.classList.add("correct");

                score++;
                scoreElement.textContent = score;

            } else {

                // Make the selected answer red
                answerButton.classList.add("wrong");

                // Get all answer buttons
                const answerButtons =
                    answersContainer.querySelectorAll(".answer-btn");

                // Find the correct answer
                currentQuestion.answers.forEach((answer, index) => {

                    if (answer.correct) {

                        // Make the correct answer green
                        answerButtons[index].classList.add("correct");
                    }

                });
            }

            // Disable all answer buttons
            answersContainer.querySelectorAll("button").forEach(button => {
                button.disabled = true;
            });

            // Wait 1 second, then move to the next question
            setTimeout(function () {

                if (currentQuestionIndex < quizQuestions.length - 1) {

                    currentQuestionIndex++;
                    showQuestion();

                } else {

                    showResults();

                }

            }, 1000);

        });

        // Add button to the answers container
        answersContainer.appendChild(answerButton);
    });
}

function showResults() {

    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScore.textContent = score;
    maxScore.textContent = quizQuestions.length;

    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {

    resultMessage.textContent = "Excellent!";

    } else if (percentage >= 50) {

        resultMessage.textContent = "Good job!";

    } else {

        resultMessage.textContent = "Keep practicing!";

    }

}
totalQuestions.textContent = quizQuestions.length;

function restartQuiz() {

    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;

    // Reset the score displayed in HTML
    scoreElement.textContent = score;

    // Reset progress bar
    progress.style.width = "0%";

    // Hide results
    resultScreen.classList.remove("active");

    // Show start screen
    startScreen.classList.add("active");
}