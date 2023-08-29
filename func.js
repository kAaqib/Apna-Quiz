// const nameinput = document.getElementById("yourname");
// const contbtn = document.getElementById("contbtn");

// contbtn.addEventListener("mouseover", (button)=>{
//     let name = nameinput.value;
//     if (!name) {
//         button.target.classList.toggle("move");
//     }
// })

const quiz510 = document.getElementById("age5-10");
const quiz1115 = document.getElementById("age11-15");
const quiz1620 = document.getElementById("age16-20");
const quiz2030 = document.getElementById("age21-30");
const quiz30 = document.getElementById("age30+"); 


const quiz_5_10 = [
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
const quiz_11_15 = [
    {
        question: "Which planet has the most extensive ring system in our solar system?",
        a: "Saturn",
        b: "Jupiter",
        c: "Uranus",
        d: "Neptune",
        ans: "a"
    },
        
    {
        question: "What is the powerhouse of the cell?",
        a: "Nucleus",
        b: "Ribosome",
        c: "Mitochondria",
        d: "Endoplasmic Reticulum",
        ans: "c"
    },
        
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Argon",
        ans: "c"
    },
        
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        ans: "c"
    },
        
    {
        question: "What is the chemical symbol for gold?",
        a: "Ag",
        b: "Ge",
        c: "Au",
        d: "Fe",
        ans: "c"
    },
        
    {
        question: "What gas do plants release during photosynthesis?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        ans: "a"
    },
        
    {
        question: "Which gas do humans inhale when they breathe in?",
        a: "Carbon Dioxide",
        b: "Oxygen",
        c: "Nitrogen",
        d: "Helium",
        ans: "b"
    },
        
    {
        question: "What is the Earth's primary source of energy?",
        a: "Geothermal energy",
        b: "Nuclear energy",
        c: "Solar energy",
        d: "Wind energy",
        ans: "c"
    },
        
    {
        question: "What is the chemical symbol for silver?",
        a: "Ag",
        b: "Si",
        c: "Sr",
        d: "Se",
        ans: "a"
    },
        
    {
        question: "Which gas is commonly known as laughing gas?",
        a: "Nitrogen",
        b: "Carbon Dioxide",
        c: "Oxygen",
        d: "Nitrous Oxide",
        ans: "d"
    }
];

const quiz_16_20 = [

];

const quiz_21_30 = [

];

const quiz_30 = [

];
if (quiz510) {
    quiz510.addEventListener("click", () => {
        quizLoad(quiz_5_10.slice());
    });
}
if (quiz1115) {
    quiz1115.addEventListener("click", () => {
        quizLoad(quiz_11_15);
    });
}
function quizLoad(quizData) {
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

        

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