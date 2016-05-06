"use strict"
/*
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});
mySet.delete(22);
mySet.add('100');
mySet.add('200');

//console.log(mySet.size);

mySet.forEach(function(val){
  console.log(val);
});

let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap.size);

let carWeakSet = new WeakSet();

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
  make: 'Toyota',
  model: 'Camry'
}

carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet);
*/

let carWeakMap = new WeakMap();

let key1 = {
  id: 1
}

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

let key2 = {
  id: 2
}

let car2 = {
  make: 'Toyota',
  model: 'Camry'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);

console.log(carWeakMap);
