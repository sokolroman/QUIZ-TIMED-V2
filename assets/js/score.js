let scores=JSON.parse(localStorage.getItem("highScores")) || []


const clearScores= document.getElementById("clear")


function displayScore(){
    const table= document.getElementById("leaderTable")
   
    
for (let i=0; i<scores.length; i++){
    
    const initTd=document.createElement("td")
    const scoreTd= document.createElement("td")
    const initTr= document.createElement("tr")

    initTd.setAttribute("class", "has-text-centered")
    scoreTd.setAttribute("class", "has-text-centered")

    initTd.append(scores[i].initials)
    scoreTd.append(scores[i].score)
    initTr.append(initTd, scoreTd)
    table.appendChild(initTr)

}
}
displayScore()



clearScores.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear()
    window.location.reload();
})

