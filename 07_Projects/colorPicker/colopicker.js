const btn = document.querySelectorAll(".button");
const body  = document.querySelector("body");
console.log(btn);
btn.forEach(element => {
    element.addEventListener("click",(e)=>{
        const color = e.target.id;
        body.style.backgroundColor = color;
    })
});