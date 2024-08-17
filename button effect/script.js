const btn = document.querySelector(".btn");

btn.addEventListener("mouseover",(event)=>{
  console.log(event.pageY-btn.offsetTop);
  // const y =event.pageY-btn.offsetTop;
  // const x =event.pageX-btn.offsetLeft;
  // console.log(event.pageY);
  // console.log(btn.offsetTop);
  console.log(event.offsetY);
  const y =event.offsetY;
  const x =event.offsetX;

  btn.style.setProperty("--xPos",x +"px");
  btn.style.setProperty("--yPos",y +"px");
});