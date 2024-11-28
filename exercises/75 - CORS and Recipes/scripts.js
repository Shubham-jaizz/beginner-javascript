// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"


const baseEndpoint = "https://recipes.beginnerjavascript.com/api";

async function getRecipes(query){
       const result = await fetch(`${baseEndpoint}/?q=${query}`);
       const data = await result.json();
       return data;
}
const recipesGrid = document.querySelector(".recipes");
function displayRecipes(recipes) {
       console.log("Creating HTML");
       const html = recipes.map((recipe) =>
         `<div class="recipe">
           <h2>${recipe.title}</h2>
           <p>${recipe.ingredients}</p>
           ${
             recipe.thumbnail &&
             `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
           }
           <a href="${recipe.href}">View Recipe →</a>
         </div>`
       );
       recipesGrid.innerHTML = html.join("");
     }

async function handleSubmit(e){
       e.preventDefault();
       console.log(e.currentTarget.query);
       form.submit.disabled = true;
       const recipes= await getRecipes(e.currentTarget.query.value);
       console.log(recipes);
       displayRecipes(recipes.results)
       form.submit.disabled = false;;


}
const form  = document.querySelector('form');

form.addEventListener("submit", handleSubmit);
// getRecipes("Omlet");
