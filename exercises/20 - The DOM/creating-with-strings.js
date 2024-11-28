const item = document.querySelector('.item');
item.innerHTML = `<h1>Hey How are you?</h1>`;
console.log(item.innerHTML);


const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = "Cute pup";
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);