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

const quiz21 = [
    {
      question: "What is the name of the force that attracts objects to each other?",
      a: "Gravity",
      b: "Magnetism",
      c: "Friction",
      d: "Electricity",
      ans: "a"
    },
    {
      question: "What is the name of the process by which water changes from a liquid to a gas?",
      a: "Evaporation",
      b: "Condensation",
      c: "Sublimation",
      d: "Freezing",
      ans: "a"
    },
    {
      question: "What is the name of the smallest unit of matter?",
      a: "Atom",
      b: "Molecule",
      c: "Cell",
      d: "Organ",
      ans: "a"
    },
    {
      question: "What is the name of the process by which plants release oxygen into the air?",
      a: "Respiration",
      b: "Photosynthesis",
      c: "Digestion",
      d: "Circulation",
      ans: "b"
    },
    {
      question: "What is the name of the layer of the Earth's atmosphere that protects us from harmful radiation?",
      a: "Troposphere",
      b: "Stratosphere",
      c: "Mesosphere",
      d: "Thermosphere",
      ans: "b"
    },
    {
      question: "What is the name of the process by which plants and animals use food to produce energy?",
      a: "Respiration",
      b: "Photosynthesis",
      c: "Digestion",
      d: "Circulation",
      ans: "a"
    },
    {
      question: "What is the name of the process by which plants and animals get rid of waste products?",
      a: "Respiration",
      b: "Photosynthesis",
      c: "Digestion",
      d: "Excretion",
      ans: "d"
    },
    {
      question: "What is the name of the largest ocean in the world?",
      a: "Pacific Ocean",
      b: "Atlantic Ocean",
      c: "Indian Ocean",
      d: "Arctic Ocean",
      ans: "a"
    },
    {
      question: "What is the name of the tallest mountain in the world?",
      a: "Mount Everest",
      b: "Mount Kilimanjaro",
      c: "Mount Denali",
      d: "Mount Fuji",
      ans: "a"
    },
    {
      question: "What is the name of the planet that is closest to the Sun?",
      a: "Mercury",
      b: "Venus",
      c: "Earth",
      d: "Mars",
      ans: "a"
    },
];

const quiz22 = [
    {
      question: "What is the process by which an organism converts glucose into energy in the absence of oxygen?",
      a: "Photosynthesis",
      b: "Aerobic respiration",
      c: "Anaerobic respiration",
      d: "Cellular respiration",
      ans: "c"
    },
    {
      question: "Which planet is often referred to as the 'Evening Star' or 'Morning Star' depending on its appearance?",
      a: "Mars",
      b: "Jupiter",
      c: "Venus",
      d: "Saturn",
      ans: "c"
    },
    {
      question: "What is the unit of electrical resistance?",
      a: "Ohm",
      b: "Watt",
      c: "Volt",
      d: "Ampere",
      ans: "a"
    },
    {
      question: "What is the chemical symbol for the element iron?",
      a: "Fe",
      b: "Ir",
      c: "In",
      d: "Io",
      ans: "a"
    },
    {
      question: "Which subatomic particle has a positive charge?",
      a: "Electron",
      b: "Proton",
      c: "Neutron",
      d: "Quark",
      ans: "b"
    },
    {
      question: "What is the process of converting a solid directly into a gas without passing through the liquid state called?",
      a: "Condensation",
      b: "Sublimation",
      c: "Evaporation",
      d: "Fusion",
      ans: "b"
    },
    {
      question: "Which of the following is the largest planet in our solar system?",
      a: "Mercury",
      b: "Venus",
      c: "Earth",
      d: "Jupiter",
      ans: "d"
    },
    {
      question: "What is the chemical formula for methane?",
      a: "CH4",
      b: "CO2",
      c: "H2O",
      d: "N2",
      ans: "a"
    },
    {
      question: "What is the process by which rocks are broken down into smaller particles by natural forces?",
      a: "Erosion",
      b: "Deposition",
      c: "Weathering",
      d: "Sedimentation",
      ans: "c"
    },
    {
      question: "Which gas is commonly known as laughing gas?",
      a: "Oxygen",
      b: "Carbon Dioxide",
      c: "Nitrous Oxide",
      d: "Hydrogen",
      ans: "c"
    }
];

const quiz23 = [
    {
      question: "What is the speed of light in a vacuum?",
      a: "186,282 miles per second",
      b: "299,792,458 meters per second",
      c: "671 million miles per hour",
      d: "3.00 x 10^8 miles per hour",
      ans: "b"
    },
    {
      question: "What is the process by which energy is produced in the sun?",
      a: "Fusion",
      b: "Fission",
      c: "Combustion",
      d: "Radiation",
      ans: "a"
    },
    {
      question: "What is the chemical formula for sulfuric acid?",
      a: "H2SO4",
      b: "SO2",
      c: "H2O2",
      d: "H2S",
      ans: "a"
    },
    {
      question: "Which particle is responsible for carrying an electric charge in an atom's nucleus?",
      a: "Proton",
      b: "Neutron",
      c: "Electron",
      d: "Photon",
      ans: "a"
    },
    {
      question: "What is the largest organ in the human body?",
      a: "Heart",
      b: "Skin",
      c: "Liver",
      d: "Brain",
      ans: "b"
    },
    {
      question: "Which gas is known as laughing gas?",
      a: "Oxygen",
      b: "Methane",
      c: "Nitrous Oxide",
      d: "Carbon Dioxide",
      ans: "c"
    },
    {
      question: "What is the process by which plants bend toward a light source?",
      a: "Photosynthesis",
      b: "Hydrotropism",
      c: "Phototropism",
      d: "Thigmotropism",
      ans: "c"
    },
    {
      question: "Which element has the highest melting point?",
      a: "Carbon",
      b: "Tungsten",
      c: "Iron",
      d: "Gold",
      ans: "b"
    },
    {
      question: "What is the phenomenon responsible for the Northern Lights (Aurora Borealis)?",
      a: "Solar Flares",
      b: "Light Pollution",
      c: "Refraction",
      d: "Solar Wind",
      ans: "d"
    },
    {
      question: "What is the smallest particle of an element that retains its chemical properties?",
      a: "Molecule",
      b: "Atom",
      c: "Ion",
      d: "Neutrino",
      ans: "b"
    }
]

const quiz11 = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Berlin",
        c: "Madrid",
        d: "Paris",
        ans: "d"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        ans: "b"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        ans: "b"
    },
    {
        question: "Which country is famous for the Great Wall?",
        a: "India",
        b: "China",
        c: "Egypt",
        d: "Greece",
        ans: "b"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Indian Ocean",
        b: "Arctic Ocean",
        c: "Atlantic Ocean",
        d: "Pacific Ocean",
        ans: "d"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Pablo Picasso",
        b: "Leonardo da Vinci",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        ans: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Mars",
        b: "Saturn",
        c: "Jupiter",
        d: "Neptune",
        ans: "c"
    },
    {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        a: "Asia",
        b: "Europe",
        c: "Australia",
        d: "Africa",
        ans: "a"
    },
    {
        question: "What is the currency of Japan?",
        a: "Dollar",
        b: "Euro",
        c: "Yen",
        d: "Pound",
        ans: "c"
    },
    {
        question: "Who is known as the father of modern physics?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Stephen Hawking",
        ans: "b"
    }
];

const quiz12 = [
    {
      question: "Who was the first President of the United States?",
      a: "John Adams",
      b: "Benjamin Franklin",
      c: "Thomas Jefferson",
      d: "George Washington",
      ans: "d"
    },
    {
      question: "In which year did Christopher Columbus first arrive in the Americas?",
      a: "1492",
      b: "1507",
      c: "1519",
      d: "1526",
      ans: "a"
    },
    {
      question: "What was the historical event that occurred on July 20, 1969?",
      a: "The signing of the Declaration of Independence",
      b: "The Boston Tea Party",
      c: "The first human moon landing",
      d: "The Battle of Gettysburg",
      ans: "c"
    },
    {
      question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
      a: "Mikhail Gorbachev",
      b: "Nikita Khrushchev",
      c: "Vladimir Putin",
      d: "Joseph Stalin",
      ans: "b"
    },
    {
      question: "What ancient wonder of the world was located in Alexandria, Egypt?",
      a: "The Hanging Gardens of Babylon",
      b: "The Colossus of Rhodes",
      c: "The Lighthouse of Alexandria",
      d: "The Great Pyramid of Giza",
      ans: "c"
    },
    {
      question: "Which Roman general is known for his conquest of Gaul (modern-day France)?",
      a: "Julius Caesar",
      b: "Mark Antony",
      c: "Hannibal",
      d: "Augustus",
      ans: "a"
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      a: "Amelia Earhart",
      b: "Bessie Coleman",
      c: "Harriet Quimby",
      d: "Valentina Tereshkova",
      ans: "a"
    },
    {
      question: "In which year did the Berlin Wall fall, leading to the reunification of Germany?",
      a: "1985",
      b: "1989",
      c: "1991",
      d: "1995",
      ans: "b"
    },
    {
      question: "Which ancient civilization is credited with the invention of the wheel?",
      a: "Mesopotamia",
      b: "Egypt",
      c: "Indus Valley",
      d: "China",
      ans: "a"
    },
    {
      question: "Who wrote the famous diary while hiding from the Nazis during World War II?",
      a: "Anne Frank",
      b: "Rosa Parks",
      c: "Eleanor Roosevelt",
      d: "Helen Keller",
      ans: "a"
    }
];

const quiz13 = [
    {
      question: "Who was the founder of the Qin Dynasty in ancient China?",
      a: "Emperor Wu",
      b: "Emperor Qin Shi Huang",
      c: "Emperor Han Wudi",
      d: "Emperor Tang Taizong",
      ans: "b"
    },
    {
      question: "Which ancient civilization is credited with the invention of the first writing system known as cuneiform?",
      a: "Egyptians",
      b: "Mayans",
      c: "Sumerians",
      d: "Indus Valley Civilization",
      ans: "c"
    },
    {
      question: "What was the primary cause of the Black Death pandemic in Europe during the 14th century?",
      a: "Bubonic Plague",
      b: "Smallpox",
      c: "Cholera",
      d: "Influenza",
      ans: "a"
    },
    {
      question: "Who was the last pharaoh of ancient Egypt?",
      a: "Cleopatra VII",
      b: "Ramesses II",
      c: "Hatshepsut",
      d: "Akhenaten",
      ans: "a"
    },
    {
      question: "In which year did Christopher Columbus first arrive in the Americas?",
      a: "1492",
      b: "1517",
      c: "1535",
      d: "1607",
      ans: "a"
    },
    {
      question: "Which historical event is often referred to as the 'Shot Heard 'Round the World'?",
      a: "American Civil War",
      b: "French Revolution",
      c: "American Revolutionary War",
      d: "World War I",
      ans: "c"
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      a: "Beryl Markham",
      b: "Amelia Earhart",
      c: "Harriet Quimby",
      d: "Jacqueline Cochran",
      ans: "b"
    },
    {
      question: "Which Chinese philosopher is known for his teachings on ethics, morality, and governance?",
      a: "Confucius",
      b: "Laozi",
      c: "Mencius",
      d: "Zhuangzi",
      ans: "a"
    },
    {
      question: "During which ancient war did the Battle of Thermopylae take place?",
      a: "The Punic Wars",
      b: "The Peloponnesian War",
      c: "The Greco-Persian Wars",
      d: "The Hundred Years' War",
      ans: "c"
    },
    {
      question: "Who wrote the epic poem 'The Divine Comedy'?",
      a: "Homer",
      b: "Dante Alighieri",
      c: "Geoffrey Chaucer",
      d: "Virgil",
      ans: "b"
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

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");

if (quiz) {
    let quizData = undefined;
    let topic = localStorage.getItem("topic");
    let level = localStorage.getItem("level");
    console.log(topic);
    console.log(level);
    if (topic === "General Knowledge" && level==="Level 1")
        quizData = quiz11;
    if (topic === "General Knowledge" && level==="Level 2")
        quizData = quiz12;
    if (topic === "General Knowledge" && level==="Level 3")
        quizData = quiz13;
    
    if (topic === "Science" && level==="Level 1")
        quizData = quiz21;
    if (topic === "Science" && level==="Level 2")
        quizData = quiz22;
    if (topic === "Science" && level==="Level 3")
        quizData = quiz23;

    if (topic === "Mathematics" && level==="Level 1")
        quizData = quiz31;
    if (topic === "Mathematics" && level==="Level 2")
        quizData = quiz32;
    if (topic === "Mathematics" && level==="Level 3")
        quizData = quiz33;

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
                quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.`;
            }
        }
    });

    q1.addEventListener("click", () => {
        currentQuiz = 0;
        loadQuiz();
    });
    q2.addEventListener("click", () => {
        currentQuiz = 1;
        loadQuiz();
    });
    q3.addEventListener("click", () => {
        currentQuiz = 2;
        loadQuiz();
    });
    q4.addEventListener("click", () => {
        currentQuiz = 3;
        loadQuiz();
    });
    q5.addEventListener("click", () => {
        currentQuiz = 4;
        loadQuiz();
    });
    q6.addEventListener("click", () => {
        currentQuiz = 5;
        loadQuiz();
    });
    q7.addEventListener("click", () => {
        currentQuiz = 6;
        loadQuiz();
    });
    q8.addEventListener("click", () => {
        currentQuiz = 7;
        loadQuiz();
    });
    q9.addEventListener("click", () => {
        currentQuiz = 8;
        loadQuiz();
    });
    q10.addEventListener("click", () => {
        currentQuiz = 9;
        loadQuiz();
    });
}