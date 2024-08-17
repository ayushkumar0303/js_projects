const imgContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const imageNumber = 4;

btnEl.addEventListener("click",(event)=>{


  for(let i=0;i<imageNumber;i++){
    const randomNum = Math.round(Math.random()*2000);
    const imgEl = document.createElement("img");
    imgEl.src=`https://picsum.photos/300?random=${randomNum}`;
    imgContainer.appendChild(imgEl);
  }
});