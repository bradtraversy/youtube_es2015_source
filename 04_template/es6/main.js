"use strict"

let name = 'John';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;
