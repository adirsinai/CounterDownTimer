const quizData = [
  {
    question: "מי הוא מלך שערי היורו לדורותיו?",
    a: "כריסטיאנו רונאלדו",
    b: "פרננדו טורס",
    c: "אלן שירר",
    d: "מישל פלאטיני",
    correct: "d",
  },
  {
    question:
      "מהי כמות השערים הגבוהה ביותר שכבש שחקן אחד בטורניר בודד של גביע העולם?",
    a: "13",
    b: "9",
    c: "10",
    d: "11",
    correct: "a",
  },
  {
    question: "מי הוא מלך שערי נבחרת הולנד?",
    a: "אריאן רובן",
    b: "רובן ואן פרסי",
    c: "10",
    d: "11",
    correct: "a",
  },
  {
    question: "מי לקחה מונדיאל רק כשאירחה אותו?",
    a: "צרפת",
    b: "אורגוואי",
    c: "ארגנטינה",
    d: "אנגליה",
    correct: "d",
  },
  {
    question: "מי הפסידה בהכי הרבה גמרי מונדיאל?",
    a: "גרמניה",
    b: "הולנד",
    c: "ברזיל",
    d: "ארגנטינה",
    correct: "a",
  },
  {
    question: "למי מהבאות יש הפסד בגמר המונדיאל?",
    a: "ספרד",
    b: "אורגוואי",
    c: "אנגליה",
    d: "צרפת",
    correct: "d",
  },
  {
    question:
      "ברזיל לקחה שלושה תארים מארבעה מונדיאלים רצופים. מי לקח את המונדיאל הרביעי?",
    a: "אנגליה",
    b: "ארגנטינה",
    c: "גרמניה",
    d: "אורוגוואי",
    correct: "a",
  },
  {
    question: "המשחק שבו נגח זידאן במטראצי נערך ב",
    a: "איטליה",
    b: "גרמניה",
    c: "יפן",
    d: "דרום אפריקה",
    correct: "b",
  },
  {
    question: "מי הנבחרת הראשונה לקחת מונדיאל כשהיא לא המארחת?",
    a: "אורוגוואי,1934",
    b: "איטליה,1938",
    c: "איטליה,1934",
    d: "אורוגוואי,1950",
    correct: "b",
  },
  {
    question: "מי ניצחה ב - הנס של ברן?",
    a: "שוויץ",
    b: "יוגוסלביה",
    c: "הונגריה",
    d: "גרמניה",
    correct: "d",
  },
];

const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("עד כאן הטריוויה להיום ניפגש שבוע הבא.");
  }
});
