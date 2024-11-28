const strt = document.querySelector('#start');
const stop = document.querySelector('#stop');
const bdy = document.querySelector('body');
let ref;
function colorChange() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  bdy.style.backgroundColor = color;
}
strt.addEventListener('click', () => {
  
  ref = setInterval(colorChange, 1000);
    

});
stop.addEventListener('click', () => {
  clearInterval(ref);
  ref = null;//for clean code we flush the value of it
});
