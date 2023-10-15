const area=document.querySelector(".snakeArea")
const snakeSize=document.querySelector(".snakeSize")

const snake=document.querySelector("#snake")
const food=document.querySelector("#food")

let speed=200;
const MIN=[0,0]
const MAX=[500,500]
const RAD=20;
// 0->stop 1-> forward -1-> backword
//            x, y
let movement=[1,0]
const getRandom=()=>{
    let rad=parseInt(Math.random()*10)*3*20;
    if(rad>MAX[0] || rad>MAX[1])
        rad=parseInt(Math.random()*10)*2*20;
    return rad;
}
let snakeLen=[3,2,1,0]
const snakeExtender=()=>{
    snakeLen.forEach((part)=>{
        let snakePart=document.createElement("div");
        snakeSize.appendChild(snakePart)
    })
    setInterval(()=>moveDOM(snakePart), speed);
}
snakeExtender()
const initalState=()=>{
    food.style.left=getRandom()+"px"
    food.style.top=getRandom()+"px"
}
initalState()

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowUp")
        movement=[0,-1]
    if(e.key==="ArrowDown")
        movement=[0,1]
    if(e.key==="ArrowLeft")
        movement=[-1,0]
    if(e.key==="ArrowRight")      
        movement=[1,0]

})

let posLeft=0;
let posTop=0;
const moveDOM=(element)=>{
    if(movement[0]===1){
        posLeft=posLeft+RAD
        element.style.left=posLeft+"px";
    }
    if(movement[0]===-1){
        posLeft=posLeft-RAD
        element.style.left=posLeft+"px"
    }
    if(movement[1]===1){
        posTop=posTop+RAD
        element.style.top=posTop+"px"
    }
    if(movement[1]===-1){
        posTop=posTop-RAD
        element.style.top=posTop+"px"
    }
}
const snakeTurn=setInterval(()=>moveDOM(snake), speed);
