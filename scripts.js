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

    // Remove the "isSelected" property from all answers
    questions.forEach(question => {
        question.answers.forEach(answer => {
            delete answer.isSelected;
        });
    })

    nextButton.innerHTML = "Next question";

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Show Results";
        //For debugging
        //let questionsLength = questions.length;
        //console.log(`The current index is: ${currentQuestionIndex} and questions.length is: ${questionsLength}`)
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedAnswer = questions[currentQuestionIndex].answers.find(
        (answer) => answer.text === selectedBtn.innerHTML
    );

    if (selectedAnswer) {
        const selectedType = selectedAnswer.type;
        //console.log(selectedType)
        // Check if there was a previously selected answer for the current question
        const previouslySelectedAnswer = questions[currentQuestionIndex].answers.find(
            (answer) => answer.text !== selectedBtn.innerHTML && answer.isSelected
        );
        // Decrement the count of the previously selected answer
        if (previouslySelectedAnswer) {
            const previouslySelectedType = previouslySelectedAnswer.type;
            if (previouslySelectedType === "A") {
                typeACount--;
            } else if (previouslySelectedType === "B") {
                typeBCount--;
            } else if (previouslySelectedType === "C") {
                typeCCount--;
            } else if (previouslySelectedType === "D") {
                typeDCount--;
            }
        }

        // Increment the count of the selected answer
        if (selectedType === "A") {
            typeACount++;
        } else if (selectedType === "B") {
            typeBCount++;
        } else if (selectedType === "C") {
            typeCCount++;
        } else if (selectedType === "D") {
            typeDCount++;
        }

        // Mark the selected answer as isSelected
        questions[currentQuestionIndex].answers.forEach(answer => {
            answer.isSelected = answer === selectedAnswer;
        });
    }
    // Remove the "clicked-answer" class from previously selected buttons
    const previouslySelectedButtons = document.querySelectorAll(".clicked-answer");
    previouslySelectedButtons.forEach((button) => {
        button.classList.remove("clicked-answer");
    });

    // Add the "clicked-answer" class to the currently selected button
    selectedBtn.classList.add("clicked-answer");

    nextButton.style.display = "block";
    //console.log(questions[currentQuestionIndex].answers.type)

}

function displayResults() {
    resetState();
    questionElement.innerHTML = `Type A: ${typeACount}, Type B: ${typeBCount}, Type C: ${typeCCount}, Type D: ${typeDCount}`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    //console.log(`current question index before ++ is: ${currentQuestionIndex}`)
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {

        showQuestion();
    } else {
        displayResults();
    }
}

nextButton.addEventListener("click", () => {


    if (currentQuestionIndex < questions.length) {

        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

