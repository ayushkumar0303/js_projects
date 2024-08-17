
const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";


const h3El = document.querySelector("h3");
const answersEl = document.querySelectorAll("p");
const btnEl = document.querySelector("button");

let i = 0;
// let quesAndAns;
btnEl.disabled=true;
let questions = [];
let currentIndex=0;
let currentQues;

async function getData(){
  try{

    const response = await fetch(apiUrl);
    const data  = await response.json();
    // console.log(data);
    // quesAndAns=data[i];
    questions=data.results.map((result)=>{
      
      const rand = Math.floor(Math.random()*4);
      // let arr = new Array(4);
      let arr =Array.from({length:4},()=>({text:"",correct:""}));
      arr[rand]={text: result.correct_answer,correct:"true"};
      // console.log(arr);
      
      // data.results[0].incorrect_answers.Array
    
      for(let i =0;i<3;i++){
        if(arr[i].text===""){
          arr[i]={text:result.incorrect_answers[i],correct:"false"};
        }else{
          arr[i+1]={text:result.incorrect_answers[i],correct:"false"};
        }
      }
      return {question:result.question,answers:arr};
    });
  }catch(e){
    alert(`Something went wrong`);
  }
  // console.log(arr);


// questions[0].question=data.results[0].question;
// questions[0].answers=arr;

}

// console.log(questions);

async function updateQuiz() {
  btnEl.disabled=true;
  
  if(questions.length===0) await getData(); // load data once when data is 0

  // await getData();// load data again and again, this may cause a problem of too many requests;

  // console.log(questions[0].question);
  currentQues=questions[currentIndex];
  h3El.innerHTML = `${currentQues.question}`;
  for(let i=0;i<currentQues.answers.length;i++){
    answersEl[i].classList.remove("wrong","correct","disabled");
    answersEl[i].innerHTML = `${currentQues.answers[i].text}`;

    answersEl[i].removeEventListener("click",updateOptions);

    answersEl[i].addEventListener("click",()=>{
      updateOptions(i) });
  }
}

function updateOptions(i){
  // console.log(answersEl[i]);
    if(currentQues.answers[i].correct==="false"){
      answersEl[i].classList.add("wrong");
    }
    selectCorrectAns();

  };



function selectCorrectAns(){
  btnEl.disabled=false;
  for(let i=0;i<currentQues.answers.length;i++){
    if(currentQues.answers[i].correct==="true"){
      answersEl[i].classList.add("correct");
    }
    answersEl[i].classList.add("disabled");
    // answersEl[i].style.cursor="none";
    // answersEl[i].disabled=true;

    answersEl[i].removeEventListener("click",updateOptions);
  }
}


btnEl.addEventListener("click", () => {
  if(currentIndex+1===questions.length){
    window.location.reload();
  }
  currentIndex=(currentIndex+1) % questions.length;
  updateQuiz();
});


updateQuiz();