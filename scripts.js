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
    },
    {
        question: "Which best describes your relationship with Mathematics?",
        answers: [
            { text: "I didn't really like math but I made it through the classes.", type: "A" },
            { text: "I love solving problems and I always made good scores in my math classes.", type: "B" },
            { text: "I barely made it through college algebra.", type: "C" },
            { text: "I failed college algebra (or lower level math) multiple times and really struggled.", type: "D" }

        ]
    },
    {
        question: "Do you like reading?",
        answers: [
            { text: "I don't usually read but sometimes I find a book I'm intersted in and read the whole thing.", type: "A" },
            { text: "I'm an avid reader. I love a good book and I'm always reading.", type: "B" },
            { text: "I never read books but I will read things like newspapers and magazines.", type: "A" },
            { text: "I hate reading. I don't even want to spend 20 seconds to read a long Facebook post.", type: "D" }

        ]
    },
    {
        question: "You are asked the following question in an interview: 'Estimate the number of golf balls that could fit into a school bus.' How do you respond?",
        answers: [
            { text: "I would ask follow-up questions to try to get more context (and buy myself some time!).", type: "A" },
            { text: "I would use what I already know about school buses and golf balls to make an educated guess. I might ask if I can draw a diagram.", type: "B" },
            { text: "I would probably panic and try to talk my way out of providing a firm answer.", type: "C" },
            { text: "I have no idea. What kind of a question is that...?", type: "D" }

        ]
    },
    {
        question: "Which pair is the same?",
        answers: [
            { text: "jkojaspfshaskf - jkojaspfskaskf", type: "C" },
            { text: "qwjedasjasnbm - qwjedsjasbnm", type: "C" },
            { text: "wyesdsdLxvc - wyesdsdlxvc", type: "C" },
            { text: "iqtgiwegasdio - iqtgiwegasdio", type: "B" },
            { text: "jasbhuhoqhwlk - jasbhunoqhwlk", type: "C" },
            { text: "poanksdnupwb - poanksdnuqwb", type: "C" },
            { text: "None of them are the same", type: "D" }

        ]
    },
    {
        question: "If gorblflur means fan belt -- pixngorbl means ceiling fan -- arthtusl means tile roof. How would you make the word 'ceiling tile'?",
        answers: [
            { text: "flurgorbl", type: "C" },
            { text: "arthflur", type: "C" },
            { text: "pixnarth", type: "B" },
            { text: "gorbltusl", type: "C" },
            { text: "It's not possible.", type: "D" }

        ]
    },
    {
        question: "The Big Cheese Factory makes 10 wheels of cheese every 6 minutes. How long will it take the Big Cheese Factory to produce 450 wheels of cheese?",
        answers: [
            { text: "3 hours", type: "C" },
            { text: "7.5 hours", type: "C" },
            { text: "4.5 hours", type: "B" },
            { text: "none of the above", type: "D" }

        ]
    },
    {
        question: "Here is a program in Ruby, a popular programming language: a = 10, b = 20, and then a = b. Once the program has been executed, what do you think the value of a would be?",
        answers: [
            { text: "20", type: "B" },
            { text: "nil", type: "C" },
            { text: "10", type: "A" },
            { text: "none of the above", type: "D" }

        ]
    },
    {
        question: "Which one of the JavaScript examples below will put only even numbers inside of the newArray variable? let numbers = [100, 50, 1, 25, 20];",
        answers: [
            { text: "let newArray = numbers.filter(num => num % 2 === 0);", type: "B" },
            { text: "let newArray = numbers.filter(num => num % 3 === 0);", type: "A" },
            { text: "let newArray = numbers.filter(num => num % 50 === 0);", type: "C" },
            { text: "I don't know", type: "D" }

        ]
    },
    {
        question: "Which of these returns 'Hi! Hi! Hi!' in JavaScript?",
        answers: [
            { text: "console.log('Hi!'{number}>3>number);", type: "C" },
            { text: "console.log('Hi! ' x 3);", type: "A" },
            { text: "console.log('Hi! '.repeat(3));", type: "B" },
            { text: "I don't know", type: "D" }

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
    questionElement.innerHTML = "Calculating results...";

    setTimeout(function () {
        let usersPersonalityType;
        if (typeBCount >= typeACount && typeBCount >= typeCCount && typeBCount >= typeDCount) {
            usersPersonalityType = "Are you sure you aren't a Software Engineer already?? This result suggests that you might already be a great fit for a career in software engineering. Your willingness to embrace the scope of the work, learn while on the job, and collaborate effectively with others aligns well with the traits of a successful software engineer. You're on the right path. To further solidify your potential in this field, consider expanding your knowledge by learning different programming languages and building a strong portfolio of projects to showcase your skills. Your attitude and attributes make you a strong candidate for success in this career."; // Type B
        } else if (typeACount > typeBCount && typeACount >= typeCCount && typeACount >= typeDCount) {
            usersPersonalityType = "You exhibit some of the qualities a Software Engineer needs. This result suggests that you have some qualities that align with those needed in the field of software engineering. However, it's important to be cautious about getting overly fixated on small details without keeping the bigger picture in mind. Software engineers need to balance both aspects. Additionally, understand that perfection isn't the goal; it's about continuous improvement. More often than not, your code will not be perfect the first, second, even fifth time around, so striving for perfection isn’t in the best interest of a software engineer. You have the right traits for learning on the job and collaborating with others, but these are skills you'll want to continue developing if you choose the path of software engineering."; // Type A
        } else if (typeCCount > typeACount && typeCCount > typeBCount && typeCCount >= typeDCount) {
            usersPersonalityType = "While you may not inherently possess all the traits of a Software Engineer, all skills are just like muscles that need some training! This result suggests that while software engineering might not be your natural fit, it's not entirely out of reach. You might not possess all the inherent traits of a software engineer, but that doesn't mean it's impossible for you. Remote work is a perk in this field, but it can be isolating, so keep that in mind. The key is to enjoy the work you do, and if you're interested, consider exploring coding through free courses. Building your skills through projects and refining your resume can help. Working well in a team and being a lifelong learner are abilities you can develop over time."; // Type C
        } else if (typeDCount > typeACount && typeDCount > typeBCount && typeDCount > typeCCount) {
            usersPersonalityType = "Software Engineering might not be the best path for you. It appears that pursuing a career in software engineering may not align perfectly with your natural traits and preferences. While this doesn't completely rule out the possibility of entering the field, it's important to consider whether this path truly resonates with your interests and characteristics. Keep in mind that anything is possible and hard work always trumps natural talent. There are proven cases of people who didn't even own a computer, had absolutely zero skills in tech, signed up for a 3-month coding bootcamp and eventually became successful software engineers. But you better believe that path was a hard one, full of stress and hardships. The final outcome will always be worth it though."; // Type D
        }

        questionElement.innerHTML = '<div id="result">' + usersPersonalityType + '</div';;
        nextButton.innerHTML = "Try Again";
        nextButton.style.display = "block";
    }, 2500);
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

