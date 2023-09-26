const username = document.getElementById("username");
const password = document.getElementById("password");
const logsub = document.getElementById("logsub");

if (logsub) {
  logsub.addEventListener("click", ()=>{
    var un = username.value;
    var pw = password.value;
    if (un && pw)
      window.location.href = "home.html";
  })
}

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

if (contbtn) {
  contbtn.addEventListener("click", ()=>{
    var value = nameinput.value;
    localStorage.setItem("myName", value);
    if (value)
      window.location.href = "topic.html";
  })
}

const HelloName = document.getElementById("UserName");

if (HelloName) {
  var value = localStorage.getItem("myName");
  HelloName.innerText = "Hello, "+value;
}

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
  }
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
];

const quiz31 = [
  {
    question: "What is the result of 8 + 4?",
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    ans: "c"
  },
  {
    question: "If a box contains 3 red balls and 2 blue balls, how many balls are there in total?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    ans: "d"
  },
  {
    question: "What is 5 multiplied by 3?",
    a: "10",
    b: "12",
    c: "15",
    d: "20",
    ans: "c"
  },
  {
    question: "If you have 12 apples and you eat 2 of them, how many apples do you have left?",
    a: "0",
    b: "2",
    c: "5",
    d: "10",
    ans: "b"
  },
  {
    question: "Simplify the expression: 3 + 2 * 4",
    a: "10",
    b: "11",
    c: "12",
    d: "14",
    ans: "c"
  },
  {
    question: "If a pack of pencils contains 6 pencils and you buy 2 packs, how many pencils do you have?",
    a: "4",
    b: "8",
    c: "10",
    d: "12",
    ans: "d"
  },
  {
    question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
    a: "10",
    b: "12",
    c: "14",
    d: "16",
    ans: "d"
  },
  {
    question: "If you have $20 and you spend $5, how much money do you have left?",
    a: "$5",
    b: "$10",
    c: "$15",
    d: "$20",
    ans: "b"
  },
  {
    question: "What is 12 divided by 3?",
    a: "2",
    b: "3",
    c: "4",
    d: "6",
    ans: "b"
  },
  {
    question: "If a square has sides of length 7 units, what is its perimeter?",
    a: "14 units",
    b: "21 units",
    c: "28 units",
    d: "35 units",
    ans: "b"
  }
];

const quiz32 = [
  {
      question: "What is the result of the following equation: (2^3) * (5 - 2) + 8 / 2?",
      a: "14",
      b: "16",
      c: "18",
      d: "20",
      ans: "b"
  },
  {
      question: "If a car travels at a constant speed of 60 miles per hour, how many miles will it travel in 4 hours?",
      a: "120 miles",
      b: "180 miles",
      c: "240 miles",
      d: "300 miles",
      ans: "c"
  },
  {
      question: "Solve for x: 2x + 5 = 17",
      a: "x = 6",
      b: "x = 7",
      c: "x = 8",
      d: "x = 9",
      ans: "b"
  },
  {
      question: "What is the area of a triangle with a base of 10 units and a height of 8 units?",
      a: "30 square units",
      b: "40 square units",
      c: "50 square units",
      d: "60 square units",
      ans: "b"
  },
  {
      question: "If 3x - 4 = 8, what is the value of x?",
      a: "x = 4",
      b: "x = 5",
      c: "x = 6",
      d: "x = 7",
      ans: "d"
  },
  {
      question: "What is the square root of 144?",
      a: "10",
      b: "12",
      c: "14",
      d: "16",
      ans: "b"
  },
  {
      question: "If a circle has a radius of 6 units, what is its circumference? (Use π = 3.14)",
      a: "18.84 units",
      b: "37.68 units",
      c: "56.52 units",
      d: "75.36 units",
      ans: "b"
  },
  {
      question: "Simplify the expression: 3(2x + 4) - 2(3x - 1)",
      a: "3x + 14",
      b: "6x + 10",
      c: "6x - 2",
      d: "9x + 12",
      ans: "c"
  },
  {
      question: "What is the sum of the first 10 positive integers?",
      a: "45",
      b: "55",
      c: "65",
      d: "75",
      ans: "b"
  },
  {
      question: "If a rectangle has a length of 12 units and a diagonal of 15 units, what is its width?",
      a: "3 units",
      b: "4 units",
      c: "5 units",
      d: "6 units",
      ans: "a"
  }
];

const quiz33 = [
  {
    question: "What is the result of the following mathematical expression: 2^10?",
    a: "512",
    b: "1,024",
    c: "2,048",
    d: "4,096",
    ans: "b"
  },
  {
    question: "What is the value of pi (π) to five decimal places?",
    a: "3.14159",
    b: "3.14286",
    c: "3.14160",
    d: "3.14285",
    ans: "a"
  },
  {
    question: "Solve the equation: 3x + 7 = 22",
    a: "x = 5",
    b: "x = 6",
    c: "x = 7",
    d: "x = 8",
    ans: "a"
  },
  {
    question: "What is the square root of 169?",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    ans: "c"
  },
  {
    question: "If a car travels at a constant speed of 60 miles per hour, how many miles will it travel in 2.5 hours?",
    a: "120 miles",
    b: "140 miles",
    c: "150 miles",
    d: "160 miles",
    ans: "c"
  },
  {
    question: "Calculate the area of a circle with a radius of 10 units, rounded to the nearest square unit.",
    a: "314 square units",
    b: "320 square units",
    c: "330 square units",
    d: "340 square units",
    ans: "a"
  },
  {
    question: "What is the value of the mathematical constant 'e' (Euler's number) to three decimal places?",
    a: "2.618",
    b: "2.718",
    c: "2.818",
    d: "2.918",
    ans: "b"
  },
  {
    question: "Evaluate the integral: ∫(2x + 3) dx",
    a: "x^2 + 3x + C",
    b: "x^2 + 2x + C",
    c: "x^3 + 3x + C",
    d: "x^3 + 2x + C",
    ans: "a"
  },
  {
    question: "What is the value of the mathematical constant 'phi' (φ, the golden ratio) to four decimal places?",
    a: "1.6180",
    b: "1.6280",
    c: "1.6380",
    d: "1.6480",
    ans: "a"
  },
  {
    question: "Solve the equation for 'x': 2x^2 - 5x + 3 = 0",
    a: "x = 1 and x = 3",
    b: "x = 1 and x = 2",
    c: "x = 2 and x = 3",
    d: "x = -1 and x = -3",
    ans: "a"
  }
];

const topicEls = document.querySelectorAll(".topic");
const levelEls = document.querySelectorAll(".level");
const selbtn = document.getElementById("selbtn");

const gk = document.getElementById("gk");
const sci = document.getElementById("sci");
const math = document.getElementById("math");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");



if (selbtn) {
  gk.addEventListener("click", () => {
    topicEls[0].checked = true;
  });
  sci.addEventListener("click", () => {
    topicEls[1].checked = true;
  });
  math.addEventListener("click", () => {
    topicEls[2].checked = true;
  });
  l1.addEventListener("click", () => {
    levelEls[0].checked = true;
  });
  l2.addEventListener("click", () => {
    levelEls[1].checked = true;
  });
  l3.addEventListener("click", () => {
    levelEls[2].checked = true;
  });
  
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
const b4sub = document.getElementById("beforesub");
const afsub = document.getElementById("aftersub");
const res = document.getElementById("res");

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
      if (currentQuiz === quizData.length - 1)
        submitBtn.innerHTML = "Submit";
      else
        submitBtn.innerHTML = "Next";
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
              if (b4sub.style.display === "block") {
                b4sub.style.display = "none";
                afsub.style.display = "block";
              } else {
                b4sub.style.display = "block";
                afsub.style.display = "none";
              }
              res.innerHTML=`You answered  ${score}/${quizData.length} questions correctly.`;
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