// step 1 : define questions

const quizData = [
    {
        question: "What is the full form of CSS?",
        options: [
            "Cascading Style Sheet",
            "Hyper Text Markup Language",
            "JavaScript",
            "Style Sheet"
        ],
        correct: 0,
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "None of the above"
        ],
        correct: 0,
    },
    {
        question: "Which tag is used to link a CSS file?",
        options: [
            "<link>",
            "<style>",
            "<css>",
            "<a>"
        ],
        correct: 0,
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "color",
            "background-color",
            "bg-color",
            "background"
        ],
        correct: 1,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: [
            "<script href='script.js'>",
            "<script name='script.js'>",
            "<script src='script.js'>",
            "<script file='script.js'>"
        ],
        correct: 2,
    },
    {
        question: "What does 'DOM' stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Data Oriented Model"
        ],
        correct: 0,
    },
    {
        question: "Which of the following is used for event handling in JavaScript?",
        options: [
            "onclick",
            "onload",
            "onchange",
            "All of the above"
        ],
        correct: 3,
    },
    {
        question: "How can you make a website mobile-responsive?",
        options: [
            "Using media queries",
            "By reducing the font size",
            "By using a fixed layout",
            "None of the above"
        ],
        correct: 0,
    },
    {
        question: "Which JavaScript method is used to write in the HTML document?",
        options: [
            "document.write()",
            "write()",
            "window.write()",
            "document.print()"
        ],
        correct: 0,
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correct: 3,
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            ":="
        ],
        correct: 0,
    },
    {
        question: "What is the default value of a JavaScript variable?",
        options: [
            "null",
            "undefined",
            "0",
            "false"
        ],
        correct: 1,
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Character"
        ],
        correct: 3,
    },
    {
        question: "What is the correct way to write a function in JavaScript?",
        options: [
            "function:myFunction()",
            "function myFunction()",
            "def myFunction()",
            "function = myFunction()"
        ],
        correct: 1,
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],
        correct: 0,
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current function",
            "The global object",
            "The current object",
            "None of the above"
        ],
        correct: 2,
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0,
    },
    {
        question: "Which of the following is used to iterate over an array in JavaScript?",
        options: [
            "for",
            "while",
            "forEach()",
            "All of the above"
        ],
        correct: 3,
    },
    {
        question: "What is the purpose of the 'break' statement in JavaScript?",
        options: [
            "To exit the loop",
            "To exit the function",
            "To stop the program",
            "None of the above"
        ],
        correct: 0,
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            "React",
            "Angular",
            "Vue",
            "All of the above"
        ],
        correct: 3,
    },
    {
        question: "What does the 'JSON' format stand for?",
        options: [
            "JavaScript Oriented Syntax Notation",
            "JavaScript Object Notation",
            "JavaScript Online Notation",
            "None of the above"
        ],
        correct: 1,
    }
];

// user name 
// Prompting the user to enter their name
let userName = prompt("Enter your name:", "Guest");
if (userName) {
    document.getElementById("userNameDisplay").textContent = `Hello, ${userName}! Welcome to the Quiz Website Based on MERN Technologies.`;
} else {
    document.getElementById("userNameDisplay").textContent = "You didn't enter a name. Please reload the page and try again.";
}



// step 2 js initialization
const quiz = document.querySelectorAll("#quiz")
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(" #question, .option_1, .option_2, .option_3, .option_4 ");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// step 3 load quiz function 

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz]
    console.log(question);

    questionElm.innerText = `${currentQuiz + 1} : ${question}`;

    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// step 4 get selected answer  function on button click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;
    //     };
    // })
    // return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElm) => curElm.checked)
}

// /deselectedAnswer

const deselectedAnswers = () => {
    return answerElm.forEach((curElm) => curElm.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (currentQuiz < quizData.length && selectedOptionIndex === quizData[currentQuiz].correct) {
        // Increment score if the answer is correct
        score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz[0].innerHTML = `
        <div class = "result"> <h2> your Score ${score}/${quizData.length} correct Answer </h2>
        <p>congratulations on  completing the quiz </p>
        <button class = "reload-button" onclick="location.reload()">Play Again </button> </div>`
            ;
    }
});