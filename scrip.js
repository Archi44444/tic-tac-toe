console.log("tic tac toe")
/*let music = new Audio("C:\\Users\\ARCHITA\\AppData\\Local\\Temp\\3b78f0b5-c115-4132-a323-62b7687e66e0_tic tac toe.zip.6e0\\tic tac toe\\music.mp3")
let aturn = new Audio("C:\\Users\\ARCHITA\\AppData\\Local\\Temp\\f9489dde-8b7b-40df-9080-3acd8f1677b0_tic tac toe.zip.7b0\\tic tac toe\\ting.mp3")
let gameover = new Audio("C:\\Users\\ARCHITA\\AppData\\Local\\Temp\\a65308a2-c97d-4ab1-9073-cc4d40be3847_tic tac toe.zip.847\tic tac toe\\gameover.mp3")*/

let turn= "X"
let isgameover=false;
const changeTurn=() => {

    return turn==="X"? "0":"X"
}
const checkWin=() => {
    let boxtext= document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,-18,5,0],
        [3,4,5,-18,15,0],
        [6,7,8,-18,25,0],
        [0,3,6,-28,15,90],
        [1,4,7,-18,15,90],
        [2,5,8,-8,15,90],
        [0,4,8,-19,15,45],
        [2,4,6,-19,15,135],
    ]
    wins.forEach (e => {
        if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="30vw"
        }
        
    })
    
}

let boxes= document.getElementsByClassName("box")
Array.from(boxes).forEach(element=> {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() => {
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            //aturn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
            
        }
      
    }
    )
}
)

reset.addEventListener('click',()=>{
     let boxtexts = document.querySelectorAll('.boxtext');
     Array.from(boxtexts).forEach(element=>{
        element.innerText=""
     });
     turn="X";
     isgameover=false
     document.querySelector(".line").style.width="0vw"
     document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})
