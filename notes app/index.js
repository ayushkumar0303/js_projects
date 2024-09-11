const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const textAreaContainerEl = document.querySelector(".textAreaContainer");
let rowEl=document.querySelectorAll(".row");


btnEl.addEventListener("click",()=>{
  createNote();
});

const createNote =()=>{
  
  const textAreaEl = document.createElement("textarea");
  const rowEl = document.createElement("div");
  rowEl.classList.add("row");
  textAreaEl.setAttribute("rows","5");
  textAreaEl.setAttribute("cols","25");
  textAreaEl.setAttribute("spellcheck","false");
  
  const spanDelEl = document.createElement("span");
  spanDelEl.setAttribute("class","material-symbols-outlined");
  spanDelEl.innerText="delete";
  rowEl.append(textAreaEl,spanDelEl);
  textAreaContainerEl.append(rowEl);

  
}


textAreaContainerEl.addEventListener("click",(event)=>{
  if(event.target.innerText==="delete"){
    event.target.parentElement.remove();
  }
});

// getStorage();