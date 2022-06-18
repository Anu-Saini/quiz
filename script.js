const startbutton = document.getElementById('start-btn');
const nextbutton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerbuttonElement = document.getElementById('answer-buttons');



let currentQuestionIndex , shuffledQuestion; 
let hasTimerStarted=false;
startbutton.addEventListener('click', startGame);

nextbutton.addEventListener('click', () => {
        currentQuestionIndex++
        setnextQues()
       })


function startGame(){
       timerclock();
       startbutton.classList.add('hide');
       shuffledQuestion = questions.sort(() => Math.random() - .5);
       currentQuestionIndex = 0;
       questionContainerElement.classList.remove('hide');
       setnextQues()
       }


function setnextQues() {
        resetState();
        showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
        questionElement.innerText = question.question
        question.answers.forEach(answer => {
                const button = document.createElement('a');
                button.innerText=answer.text;
                button.classList.add('btn');
                if(answer.correct){
                        button.dataset.correct=answer.correct
                       }
               button.addEventListener('click',selectAnswer);
               answerbuttonElement.appendChild(button);
        });
}

function resetState() {
        clearStatusClass(document.body);
        nextbutton.classList.add("hide");
        while (answerbuttonElement.firstChild){
           answerbuttonElement.removeChild
           (answerbuttonElement.firstChild);
        }
}
function selectAnswer (e) {
        const selectedbutton = e.target;
        const correct = selectedbutton.dataset.correct;
        setStatusClass(document.body, correct);
        Array.from(answerbuttonElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
             });
       

             if(shuffledQuestion.lenght>currentQuestionIndex + 1) {
                nextbutton.classList.remove('hide');
        } else {
                startbutton.innerText="Next";
                startbutton.classList.remove("hide");
        }
        
}

var right=0;
function setStatusClass(element,correct) {
        clearStatusClass(element);
        if(correct) {
                element.classList.add('correct')
             right ++;      
              document.getElementById('score').innerHTML= right;
                console.log(right);
        }   else {
                element.classList.add('wrong')
            
               }
}

function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
        }


const questions = [ {
                question: "Ques.  A very useful tool used during development and debugging for printing content to the debugger is :",
                answers :[
                        {text:'JavaScript', correct :false},
                        {text:'terminal/bash', correct :false},
                        {text:'for loops', correct :false },
                        {text:'console log', correct :true},                       
                ]
        },
        {
                question: "Ques.   Commonly used data types DO NOT Include : ",
                answers :[
                        {text:'Strings', correct :false},
                        {text:'booleans', correct :false},
                        {text:'alerts', correct :true },
                        {text:'numbers', correct :false},                       
                ]
        },
        {
                question: "Ques.  The condition in an if/else statement is enclosed within ________ ?",
                answers :[
                        {text:'quotes', correct :false},
                        {text:'curly brackets', correct :true},
                        {text:'paranthesis', correct :false },
                        {text:'square brackets', correct :false},                       
                ]
        },
        {
                question: "Ques.  Arrays in javascript can be used to store ______ ",
                answers :[
                        {text:'number & strings', correct :false},
                        {text:'other arrays', correct :false},
                        {text:'booleans', correct :false },
                        {text:'All of the above', correct :true},                       
                ]
        },
        {
                question: "Ques.  String values must be enclosed within _____ when being assigned to variables?",
                answers :[
                        {text:'commas', correct :false},
                        {text:'curley brackets', correct :false},
                        {text:'quotes', correct :true },
                        {text:'parantheses', correct :false},                       
                ]
        },
        {
                question: "Ques.  An example of non closing tags will be",
                answers :[
                        {text:'p', correct :false},
                        {text:'html', correct :false},
                        {text:'body', correct :false },
                        {text:'img', correct :true},                       
                ]
        }        
]
function timerclock () {
 if (!hasTimerStarted) {

 
        var count=5000;
 var interval = setInterval(function() {
        document.getElementById("counter").innerHTML = count;
   count--;
   if(count === 0){
        clearInterval(interval);
        document.getElementById("counter").innerHTML = "0";
 // or...
 alert("you are out of time");       
   }
}, 1000);
hasTimerStarted=true;
}};

               
          