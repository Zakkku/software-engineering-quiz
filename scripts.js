const questions = [
    {
        question: "What interests you most about a career in Software Engineering?",
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
            { text: "I’d rather work on my own. If you want it done right, do it yourself!", type: "Z" }
        ]
    },
    {
        question: "What’s your philosophy on learning within your career?",
        answers: [
            { text: "I’ll take whatever certifications or courses are needed to help me succeed in my career or that are required by my manager.", type: "A" },
            { text: "I’m a lifelong learner. I’ll go out of my way to learn new skills or research something I don’t know, even if it’s in the moment.", type: "B" },
            { text: "Once I’ve landed the job, I don’t think I need to learn much more. Right?", type: "Z" }
        ]
    },
    {
        question: "Are you a perfectionist?",
        answers: [
            { text: "Absolutely! If it’s not perfect and buttoned up the first time around, I shut down.", type: "A" },
            { text: "I like things done well and done right, but I’m okay if it takes a few tries to get there. The journey is just as important as the destination.", type: "B" },
            { text: "Not really. Something doesn’t need to be perfect for it to work.", type: "C" }

        ]
    },
    {
        question: "Do you prefer to see the big picture or the small details that make it up?",
        answers: [
            { text: "Small details are the only thing that helps the big picture come together.", type: "A" },
            { text: "I look at both — they’re weighted equally in my book.", type: "B" },
            { text: "Big picture only. I don’t get bogged down in the small details.", type: "C" }

        ]
    }
];

const welcomePage = document.getElementById("welcome-page");
const quizContainer = document.querySelector(".quiz");

const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let typeACount = 0;
let typeBCount = 0;
let typeCCount = 0;
let typeDCount = 0;

function initializeWelcomePage() {
    // Show the welcome page
    welcomePage.style.display = "block";

    // Hide the quiz container
    quizContainer.style.display = "none";
}

function startQuiz() {

    // Hide the welcome page
    welcomePage.style.display = "none";

    // Show the quiz container
    quizContainer.style.display = "block";

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
            } else if (previouslySelectedType === "Z") {
                typeCCount--;
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
        } else if (selectedType === "Z") {
            typeCCount++;
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
    let usersPersonalityType;
    if (typeBCount >= typeACount && typeBCount >= typeCCount && typeBCount >= typeDCount) {
        usersPersonalityType = "You are type B";
    } else if (typeACount > typeBCount && typeACount >= typeCCount && typeACount >= typeDCount) {
        usersPersonalityType = "You are type A";
    } else if (typeCCount > typeACount && typeCCount > typeBCount && typeCCount >= typeDCount) {
        usersPersonalityType = "You are type C";
    } else if (typeDCount > typeACount && typeDCount > typeBCount && typeDCount > typeCCount) {
        usersPersonalityType = "You are type D";
    }
    questionElement.innerHTML = '<div id="result">' + usersPersonalityType + '</div';;
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
        initializeWelcomePage();
    }
})

initializeWelcomePage();

