const boxes = document.querySelectorAll(".box");
const result = document.querySelector(".result");
const comWin = document.querySelector(".comp_win");
const playerWin = document.querySelector(".player_win");
const restart = document.querySelector(".restart");
let draw=0,comp=0,player=0;

let computerChoice =['Rock','Paper','Scissor'];

let rand;

restart.addEventListener('click',()=>{
  result.innerText='Start Game';
  result.style.color="#732C2C";
  draw=0;
  comp=0;
  player=0;
  playerWin.innerHTML=`Player 0`;
  comWin.innerHTML=`Computer 0`;
});

boxes.forEach(box=>{
  box.addEventListener('click',()=>{
    rand=Math.round(Math.random()*2);
    computerChoice[rand];
    // console.log(`computer: ${computerChoice[rand]}`);
    // console.log(`player: ${box.innerHTML}`);
    if(box.innerText===computerChoice[rand]){
      // console.log("its a draw");
      result.innerText="Opps!!! it's a draw.";
      result.style.color="blue";
      draw++;
    }
    else if((box.innerText==='Paper' && computerChoice[rand]==='Rock') || (box.innerText==='Rock' && computerChoice[rand]==='Scissor') || (box.innerText==='Scissor' && computerChoice[rand]==='Paper') ){
      result.innerText=`Congratulations!!! you won. ${box.innerText} beats ${computerChoice[rand]}`;
      result.style.color="green";
      player++;
      playerWin.innerHTML=`Player ${player}`;
      // console.log("player won");
    }else{
      result.innerText=`You lost, ${computerChoice[rand]} beats ${box.innerText}`;
      result.style.color="red";
      comp++;
      comWin.innerHTML=`Computer ${comp}`;
      // console.log("computer won");
    }

  });
});