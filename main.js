const dataQuiz = [
    {
        question: "💬 What is the capital of America?",
        a: "Vashington",
        b: "New York",
        c: "Tashkent",
        d: "Varshava",
        correct: "a"
    },
    {
        question: "💬 What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "💬 Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "b"
    },
    {
        question: "💬 What is the chemical symbol for water?",
        a: "H2O",
        b: "O2",
        c: "CO2",
        d: "HO",
        correct: "a"
    },
    {
        question: "💬 What is the capital of France?",
        a: "Madrid",
        b: "Berlin",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "💬 Who painted the Mona Lisa?",
        a: "Pablo Picasso",
        b: "Vincent van Gogh",
        c: "Claude Monet",
        d: "Leonardo da Vinci",
        correct: "d"
    },
    {
        question: "💬 What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "💬 Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "💬 What is the smallest continent by land area?",
        a: "Europe",
        b: "Australia",
        c: "Antarctica",
        d: "South America",
        correct: "b"
    },
    {
        question: "💬 Who developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Galileo Galilei",
        c: "Albert Einstein",
        d: "Niels Bohr",
        correct: "c"
    }
]

// ✅ Selectors 
const title = document.querySelector('#title'),
    quiz = document.querySelector('.quiz-container'),
    submitForm = document.querySelector('#btn'),
    aText = document.querySelector('#a_text'),
    bText = document.querySelector('#b_text'),
    cText = document.querySelector('#c_text'),
    dText = document.querySelector('#d_text'),
    answers=document.querySelectorAll('.answer');
    

    let currentQuiz=0;
    let score=0;

// functions 
function loadQuiz(){
    title.innerHTML=dataQuiz[currentQuiz].question,
    aText.innerHTML=dataQuiz[currentQuiz].a,
    bText.innerHTML=dataQuiz[currentQuiz].b,
    cText.innerHTML=dataQuiz[currentQuiz].c,
    dText.innerHTML=dataQuiz[currentQuiz].d;
    diselect()
}
loadQuiz()

function diselect(){
    answers.forEach(e=>e.checked=false)
}

function getQuiz(){
    let solution;
    answers.forEach(element=>{
        if(element.checked){
            solution=element.id;
        }
    })
    return solution;
}
submitForm.addEventListener('click',()=>{
    let solution=getQuiz();
    if(solution===dataQuiz[currentQuiz].correct){
        score++
    }
    currentQuiz++
    if(currentQuiz<dataQuiz.length){
        loadQuiz();
    }else{
        quiz.innerHTML=`
        <h2 class="title">Your score is ${score}/${dataQuiz.length}</h2>
        <button class="btn" onclick="location.reload()">Reload</button>

        `
    }
})