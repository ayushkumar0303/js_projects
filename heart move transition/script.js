const bodyEl = document.querySelector("body");
const name = prompt("Enter your name and move the cursor");

bodyEl.addEventListener("mousemove",(event)=>{
// console.log(event);
  const xPos = event.offsetX;
  // console.log(xPos);
  const yPos = event.offsetY;
  // console.log(yPos);
  const spanEl = document.createElement("span");
  const pEl = document.createElement("p");
  pEl.innerHTML=name;
  
  spanEl.style.left=xPos + "px";
  spanEl.style.top=yPos + "px";

  const size = Math.random()*100;
  spanEl.style.height=size+ "px";
  spanEl.style.width=size+ "px";

  pEl.style.fontSize=(size/4) + "px";

  bodyEl.appendChild(spanEl);
  spanEl.appendChild(pEl);

  setTimeout(()=>{
    spanEl.remove();
  },4000)
});

