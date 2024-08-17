const heading = document.querySelector("h1");

// console.log(heading);
const careers=['Youtuber','Web Developer','Engineer'];

let currentIndex=0;
let characterIndex=0;

updateText();

// function updateTextChar(){
//   setTimeout(()=>{
//     characterIndex=characterIndex+1;
//   },1000);
// }

function updateText(){

  
  heading.innerText = `I am ${careers[currentIndex].slice(0,1)=="E"? "an":'a'} ${careers[currentIndex].slice(0,characterIndex)}`;
  
  if(characterIndex===careers[currentIndex].length){
    characterIndex=0;
    currentIndex++;
  }
  characterIndex++;

  if(currentIndex==careers.length){
    currentIndex=0;
  }
  
  setTimeout(()=>{
    updateText();
  },300);
}
