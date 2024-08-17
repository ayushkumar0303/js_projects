const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// console.dir(inputEl); // to see all properties and method

// Using Object.keys()
// console.log(Object.keys(inputEl));

// // Using for...in loop
// for (let key in inputEl) {
//   console.log(key);
// }

inputEl.checked=JSON.parse(localStorage.getItem("mode"));
// updateBackground();
// bodyEl.setAttribute("color");

updateBackground();

function updateBackground(){
  if(inputEl.checked){
    bodyEl.style.backgroundColor='black';
  }else{
    bodyEl.style.backgroundColor='white';
    
  }
}

inputEl.addEventListener("input",()=>{
  updateBackground();
  updateLocalStorage();
});

function updateLocalStorage(){
  localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}
