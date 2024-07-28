const boxes = document.querySelectorAll(".box");
const winnerStatus = document.querySelector(".show-result");
const resetBtn = document.querySelector(".restart-game");
// console.log(winnerStatus);
let turnO = true;
// console.log(boxes);

let matchWin=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let cnt=0;

let resetButton=()=>{
  winnerStatus.innerText='';
  turnO=true;
  boxes.forEach((box)=>{
    box.innerHTML='';
    box.disabled=false;
  });
  cnt=0;

};

function checkWinner(){
  for(let val of matchWin){
    if(boxes[val[0]].innerHTML!=='' && boxes[val[1]].innerHTML!=='' && boxes[val[2]].innerHTML!=='' ){
      if(boxes[val[0]].innerHTML===boxes[val[1]].innerHTML && boxes[val[1]].innerHTML===boxes[val[2]].innerHTML){
        // console.log("Winner is found");
        winnerStatus.innerText=`Congratulations!!! Player ${boxes[val[0]].innerHTML} won the match.`;
        boxes.forEach((box)=>{
          box.disabled=true;
        });
      }
    }
  }
}

resetBtn.addEventListener("click",resetButton);

boxes.forEach(box=>{
  box.addEventListener("click",()=>{
    // console.log(box);
    // console.log("button is clicked");
    if(turnO){
      box.innerHTML='0';
      turnO= false;
    }else{
      box.innerHTML='X';
      turnO= true;
    }
    cnt++;
    box.disabled=true;
    checkWinner();
    if(cnt===9){
      winnerStatus.innerText=`Opps!!! It's draw.`;

    }


  });
});