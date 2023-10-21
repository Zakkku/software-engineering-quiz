const questions = [
    {
        question: "What interests you most about the software engineering career path?",
        answers: [
            { text: "Earning potential. I want to make money - and lots of it!", type: "A" },
            { text: "Scope of work. I find creating things, problem solving, and working with others rewarding.", type: "B" },
            { text: "Remote work and independence. I like that a lot of tech jobs don’t require you to be in office.", type: "C" }
        ]
    },
    {
        question: "How do you best work with people?",
        answers: [
            { text: "I prefer to work on my own, but I’ll add other people into the loop as needed.", type: "A" },
            { text: "I enjoy working in teams, especially on large projects where we each have individual components to bring to the table.", type: "B" },
            { text: "I’d rather work on my own. If you want it done right, do it yourself!", type: "C" }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let typeACount = 0;
let typeBCount = 0;
let typeCCount = 0;
let typeDCount = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    typeACount = 0;
    typeBCount = 0;
    typeCCount = 0;
    typeDCount = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
