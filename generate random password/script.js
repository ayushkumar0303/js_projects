const btnEl  = document.querySelector("button");
const inputAreaEl = document.getElementById("inputArea");
const copyBtnEl = document.querySelector("#copy-btn");

let charUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charLower="abcdefghijklmnopqrstuvwxyz";
let nums ="0123456789";
let chars="!@#$%^&*(){}[]?";



function generateRandomPassword(){
  let st = "";
  let keyLength=8;
  let randNum;
  while(keyLength!=6){
    randNum=Math.floor(Math.random()*26);
    st+=charUpper[randNum];
    keyLength--;
  }

  while(keyLength!=4){
    randNum=Math.floor(Math.random()*26);
    st+=charLower[randNum];
    keyLength--;
  }
  while(keyLength!=2){
    randNum=Math.floor(Math.random()*10);
    st+=nums[randNum];
    keyLength--;
  }
  while(keyLength!=0){
    randNum=Math.floor(Math.random()*15);
    st+=chars[randNum];
    keyLength--;
  }

  // console.log(st);
  inputAreaEl.value=st;
}

copyBtnEl.addEventListener("click",()=>{
  // console.dir(inputAreaEl);
  inputAreaEl.select();
  navigator.clipboard.writeText(inputAreaEl.value);
  copyBtnEl.style.color="gray";
});


btnEl.addEventListener("click",()=>{
  generateRandomPassword();
  copyBtnEl.style.color="green";
});