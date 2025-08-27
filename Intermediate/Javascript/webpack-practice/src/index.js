// index.js
import "./styles.css"
import { greeting } from "./greeting.js";
import _ from 'lodash';
import Data from './data.xml';
import Notes from './data.csv';

console.log(greeting);

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);


function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());


  console.log(Data);
  console.log(Notes);
