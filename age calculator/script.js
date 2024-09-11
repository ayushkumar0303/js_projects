const containerEl = document.querySelector(".container");
const buttonEl = document.getElementById("btn");
const inputEl = document.querySelector("#input");
const resultEl = document.querySelector("#result");
inputEl.max = new Date().toISOString().split('T')[0];


const calculateAge = () => {
  // console.log(new Date(2024,2,0).getDate()); return previous date

  // console.log(new Date(2024,-1).getMonth()); return previous month
  if (inputEl.value === '') {
    return;
  }

  const currDate = new Date(inputEl.value);

  // console.dir(currDate);

  const y1 = currDate.getFullYear();
  const m1 = currDate.getMonth() + 1;
  const d1 = (currDate.getDate());


  const today = new Date();
  // console.dir(today);

  const y2 = today.getFullYear();
  const m2 = today.getMonth() + 1;
  const d2 = (today.getDate());

  let y3, d3, m3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = m2 + 12 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDayInMonth(y2, m2) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 12 + m3;
    y3--;
  }

  // console.log("calculate");
  // console.dir(inputEl.value);
  // const year=inputEl.value.slice(0,4);
  // const month=inputEl.value.slice(5,7);
  // const day=inputEl.value.slice(8,10);

  // console.log(currDay);
  // console.log(currMonth);
  // console.log(currYear);
  resultEl.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span>  months and  <span>${d3}</span>  days old`;

}

const getDayInMonth = (y, m) => {

  return new Date(y, m, 0).getDate();
}

buttonEl.addEventListener("click", () => {
  calculateAge();
});
