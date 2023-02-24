console.log("welcome to Tic Tac Toe")
let bg_music = new Audio("background.mp3")
let click = new Audio("click.mp3")
let win = new Audio("win.wav")
let lose = new Audio("lose.wav")
let turn = "X"
let gameOver = false

// bg_music.play();
// Changing the turn of the user 
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}

// check for win or lose 
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText")
    let win = [
        [0,1,2,4,6,0],
        [3,4,5,4,18,0],
        [6,7,8,4,30,0],
        [0,3,6,-8,18,90],
        [1,4,7,4,18,90],
        [2,5,8,16,18,90],
        [0,4,8,3,18,45],
        [2,4,6,3,18,-45]
    ]

    win.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "25vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
            
        }
    })

}

// game Logic 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            click.play();
            checkWin();
            if(!gameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})


// reset button 
// let reset = document.getElementById('reset')
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X";
    gameOver = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0vw"
    document.querySelector(".line").style.width = "0vw";

})

