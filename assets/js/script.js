let currentQindex=0
let time= questions.length * 15
let counter;
let score =0
let finalScore;
let highScoreArr;


const startbtn=document.getElementById("start")
const startCont=document.getElementById("gameControls")
const questionsContainer=document.getElementById("question-container")
const qText= document.getElementById("questions")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const timeEL=document.getElementById("time")
const btnGrid= document.getElementById("answer-btns")
const initContainer=document.getElementById("initials")
const scoreEL=document.getElementById("score")
const timeScoreEL= document.getElementById("timeScore")
const submitBtn= document.getElementById("btnInitials")
const userInitials=document.getElementById("userInitials")


function startQuiz(){
    if(currentQindex === questions.length){
        endQuiz()
    }
  
questionsContainer.classList.replace("hide", "show")
qText.textContent=questions[currentQindex].question
btn1.textContent=questions[currentQindex].answer1
btn2.textContent=questions[currentQindex].answer2
btn3.textContent=questions[currentQindex].answer3
btn4.textContent=questions[currentQindex].answer4

btn1.setAttribute("value",questions[currentQindex].answer1 )
btn2.setAttribute("value",questions[currentQindex].answer2 )
btn3.setAttribute("value",questions[currentQindex].answer3 )
btn4.setAttribute("value",questions[currentQindex].answer4 )

btn1.setAttribute("class","button btnCss is-rounded")
btn2.setAttribute("class","button btnCss  is-rounded")
btn3.setAttribute("class","button btnCss is-rounded")
btn4.setAttribute("class","button btnCss is-rounded")
}

function startTimer(){
    timeScoreEL.classList.replace("hide", "flex")
    
    counter=setInterval(function(){
        time--
        timeEL.textContent= time
        if(time == 0){
        endQuiz()
        }
    },100)

}

function checkAnswer(userChoice){
    if(userChoice===questions[currentQindex].correct){
        
        console.log("correct!");
        currentQindex++
        score++
         scoreEL.innerHTML=parseInt(score)
        startQuiz()
    }
    else{
        currentQindex++
        startQuiz()
        time= time-1
    }
}


function endQuiz(){
    clearInterval(counter)
    questionsContainer.style.display="none"
    initContainer.classList.replace("hide", "flex")
    finalScore=score

}



startbtn.addEventListener("click",()=>{
    startCont.style.display="none"
    console.log("click");
    startTimer()
    startQuiz() 
})

btnGrid.addEventListener("click", (event)=>{
    event.preventDefault()
    let btnClick= this.event.target.value
    console.log(btnClick)
    checkAnswer(btnClick)
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
   const initials= userInitials.value.trim()
   if(initials !== ""){
       highScoreArr=JSON.parse(localStorage.getItem("highScores")) || []
   var userScore={
        initials:initials,
        score:finalScore
    }
    highScoreArr.push(userScore)
    console.log(highScoreArr)
    localStorage.setItem("highScores",JSON.stringify(highScoreArr))
}
window.location.assign("scorePage.html")
})