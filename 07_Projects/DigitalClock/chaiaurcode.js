const clock = document.querySelector("#clock");
const date  = new Date();
const div = document.createElement("div");

const div2 = document.createElement("div");
 
div.textContent = date.toUTCString().slice(0,17);
clock.appendChild(div);
clock.appendChild(div2);
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  div2.innerHTML = date.toLocaleTimeString();
}

