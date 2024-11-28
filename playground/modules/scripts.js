import  ohoo,{ returnHi,last } from "./utils.js";
// import wes from  './wes.js';
import *as everything from './wes.js';

import { handleButtonClick } from "./handlers.js";

const button = document.querySelector("button");

button.addEventListener("click", handleButtonClick);
const name = "wes";
console.log(everything.eat());

console.log(ohoo());
console.log(last)
console.log(returnHi(name));