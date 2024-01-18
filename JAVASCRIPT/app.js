const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap =  document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

 

btn.addEventListener('click',chaincolor)
function chaincolor() {
 
let changeColor ='#';
for(let i = 1;i <= 6; i++) {
    changeColor += hexColor()
    // console.log(changeColor)  step by step checking
}
wrap.style.background = changeColor
 colortext.innerHTML=changeColor
//  btn.style.color = changeColor
}

function hexColor() {   
    let randomIndex = Math.round(Math.random()*16)
 
    return hex[randomIndex]
    
}

