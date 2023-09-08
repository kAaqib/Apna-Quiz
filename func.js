const nameinput = document.getElementById("yourname");
const contbtn = document.getElementById("contbtn");
if (contbtn) {
    contbtn.addEventListener("mouseover", (button)=>{
        let name = nameinput.value;
        if (!name) {
            button.target.classList.toggle("move");
        }
    })
}

const HelloName = document.getElementById("UserName");

if (contbtn) {
    contbtn.addEventListener("click", ()=>{
        var value = nameinput.value;
        localStorage.setItem("myName", value);
    })
}

if (HelloName) {
    var value = localStorage.getItem("myName");
    HelloName.innerText = "Hello, "+value;
}

 


const quiz1 = [
    {
        question: "What is the process by which plants make their own food using sunlight?",
        a: "Photosynthesis",
        b: "Respiration",
        c: "Digestion",
        d: "Circulation",
        ans: "a"
    },
    {

        question: "Which planet is known as the 'Red Planet'?",
        a: "Earth",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        ans: "c"
    },
    {
        question: "What is the smallest unit of life?",
        a: "Cell",
        b: "Molecule",
        c: "Atom",
        d: "Organ",
        ans: "a"
    },
    {
        question: "Which gas do plants use to perform photosynthesis?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Hydrogen",
        ans: "c"
    },
    {
        question: "Which force keeps planets in orbit around the sun?",
        a: "Gravitational force",
        b: "Magnetic force",
        c: "Frictional force",
        d: "Electrostatic force",
        ans: "a"
    },
    {
        question: "What gas do humans primarily exhale when they breathe out?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "b"
    },  
    {
        question: "Which chemical element is represented by the symbol 'H' on the periodic table?",
        a: "Helium",
        b: "Hydrogen",
        c: "Hassium",
        d: "Hafnium",
        ans: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "African Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        ans: "b"
    },  
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Chlorofluorocarbons (CFCs)",
        d: "Methane",
        ans: "c"
    },  
    {
        question: "What is the chemical formula for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "N2",
        ans: "a"
    }
];

const quiz2 = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Earth",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        ans: "c"
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        a: "Photosynthesis",
        b: "Respiration",
        c: "Digestion",
        d: "Circulation",
        ans: "a"
    },
    
    {
        question: "What is the smallest unit of life?",
        a: "Cell",
        b: "Molecule",
        c: "Atom",
        d: "Organ",
        ans: "a"
    },
    {
        question: "Which gas do plants use to perform photosynthesis?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Hydrogen",
        ans: "c"
    },
    {
        question: "Which force keeps planets in orbit around the sun?",
        a: "Gravitational force",
        b: "Magnetic force",
        c: "Frictional force",
        d: "Electrostatic force",
        ans: "a"
    },
    {
        question: "What gas do humans primarily exhale when they breathe out?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "b"
    },  
    {
        question: "Which chemical element is represented by the symbol 'H' on the periodic table?",
        a: "Helium",
        b: "Hydrogen",
        c: "Hassium",
        d: "Hafnium",
        ans: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "African Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        ans: "b"
    },  
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Chlorofluorocarbons (CFCs)",
        d: "Methane",
        ans: "c"
    },  
    {
        question: "What is the chemical formula for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "N2",
        ans: "a"
    }
];

const topicEls = document.querySelectorAll(".topic");
const levelEls = document.querySelectorAll(".level");
const selbtn = document.getElementById("selbtn");

if (selbtn) {
    selbtn.addEventListener("click", ()=>{
        let topic = undefined;
        let level = undefined;
        topicEls.forEach(topicEls => {
            if (topicEls.checked)
                topic = topicEls.id;
        })
        levelEls.forEach(levelEls => {
            if (levelEls.checked)
                level = levelEls.id;
        })
        localStorage.setItem("topic", topic);
        localStorage.setItem("level", level);
    })
}

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const q1 = document.getElementById("")
if (quiz) {
    let quizData = undefined;
    let topic = localStorage.getItem("topic");
    let level = localStorage.getItem("level");
    console.log(topic);
    console.log(level);
    if (topic === "General Knowledge" && level==="Level 1")
        quizData = quiz1;
    
    if (topic === "Science" && level==="Level 2")
        quizData = quiz2;

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }

    function getSelected() {
        let answer = undefined;
        answerEls.forEach(answerEls => {
            if (answerEls.checked) {
                answer = answerEls.id;
            }
        });
        return answer;
    }

    function deselectAnswers() {
        answerEls.forEach(answerEls => {
            answerEls.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].ans) {
                score++;    
            }
            currentQuiz++;
            if (currentQuiz < quizData.length) { 
                loadQuiz(); 
            } else { 
                quiz.innerHTML=` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="#">Reload</button>`;
            }
        }
    });
}