// Array of questions object
const questions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is the capital of Nigeria?", answer: "abuja" },
    { question: "What is the capital of United States?", answer: "washington dc" }
]

// creating a current question object
let currentQuestion = {};

// creating a function for the next question
const nextQuestion = () => {
    // select a random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").value = "";
    document.getElementById("timer").style.display = "none";
}

// function for checking the answer
const checkAnswer = () => {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");

    if (userAnswer === currentQuestion.answer){
        feedback.textContent = "Correct!";
        feedback.style.color = "green";

        let countdown = 10;
        document.getElementById("timer").style.display = "block";
        document.getElementById("countdown").textContent = countdown;
        let timer = setInterval(() => {
            countdown--
            document.getElementById("countdown").textContent = countdown;
            if(countdown === 0){
                clearInterval(timer);
                nextQuestion()
            }
        }, 1000);
    }
    else{
        feedback.textContent = "Incorrect, Try again!";
        feedback.style.color = "red"
    }
}

document.getElementById("submit").addEventListener("click", () => {
    if (document.getElementById("answer").value === ""){
        document.getElementById("feedback").textContent = "Please enter an answer";
        document.getElementById("feedback").style.color = "red";
        document.getElementById("answer").focus();
        return
    }
    checkAnswer();
});

document.getElementById("next").addEventListener("click", () => {
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    nextQuestion()
})

nextQuestion();