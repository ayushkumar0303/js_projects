const inputBox = document.querySelector("#input_box");
const listContainer= document.getElementById("list_container");
const btn = document.getElementsByTagName("button");
// console.log(btn[0]);


function addTask(){
  if(inputBox.value===''){
    alert("Enter items to add it in the list");
  }else{
    let li = document.createElement("li");

    li.innerHTML=inputBox.value;
    listContainer.append(li);

    let span = document.createElement("span");

    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  saveData();
  console.log(saveData());
  inputBox.value='';
}
btn[0].addEventListener("click",()=>{
  addTask();
});

listContainer.addEventListener("click",(e)=>{
  // console.log(e);
  // console.log(e.target);
  if(e.target.nodeName==='LI'){
    e.target.classList.toggle("checked");
  }else if(e.target.nodeName==='SPAN'){
    e.target.parentNode.remove();
  }
  saveData();
  console.log(saveData());
});

function saveData(){
  localStorage.setItem("listData",listContainer.innerHTML);
}

function getData(){
  listContainer.innerHTML=localStorage.getItem("listData");
}

getData();