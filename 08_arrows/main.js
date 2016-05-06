"use strict"
/*
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);
*/

/*
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
  return false;
}
*/

let add = (a,b) => {
  let sum = a+b;
  console.log(sum);
  return false;
}

add(10,2);
