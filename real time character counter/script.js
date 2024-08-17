const textareaEl = document.querySelector("#text-area");
const totalChar = document.querySelector(".total-character");
const remainingChar = document.querySelector(".remaining-character");

textareaEl.addEventListener("keyup",()=>{
  // console.log();
  const totalLength = textareaEl.value.length;
  totalChar.innerText=`${totalLength}`;

  const maxLength=textareaEl.getAttribute("maxLength");
  remainingChar.innerHTML=`${maxLength-totalLength}`;
});