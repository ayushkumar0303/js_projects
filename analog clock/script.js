const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

updateTime();

function updateTime(){
  const date = new Date();
  // console.dir(date);
  // console.dir(date.getHours());
  // console.dir(date.getMinutes());
  // console.dir(date.getSeconds());
  // console.log(date);

  const hrDeg=(date.getHours()/12)*360 ;
  const minDeg = (date.getMinutes()/60)*360;
  const secDeg = (date.getSeconds()/60)*360;
  // console.log(date.getSeconds()/60);

  hourEl.style.transform = `rotate(${hrDeg}deg)`;
  minuteEl.style.transform = `rotate(${minDeg}deg)`;
  secondEl.style.transform = `rotate(${secDeg}deg)`;

  setTimeout(updateTime,1000);
}
