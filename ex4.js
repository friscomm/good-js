'use strict';

//Write a from function that produces a generator that will produce a series of values
function from(start){
  return function(){
    let newStart = start;
    start += 1;
    return newStart;
  }
}

let index = from(0);


//Write a to funciton that takes a generator and an end value, and returns a generator that will produce numbers up to that limit
function to(func, limit){
  return function(){
    let num = func();
    if(num < limit){
      return num;
    }
    return undefined;
  }
}

let index2 = to(from(1), 3);

// console.log(index2());
// console.log(index2());
// console.log(index2());

//Write a fromTo function that produces a generator that will produce values in a range

//without using previous code
function fromTo(start, stop){
  return function(){
    let current = start;
    if(current < stop){
      start += 1;
      return current;
    }
    return undefined;
  }
}

function fromTo2(start, stop){
  return to(from(start), stop);
}

let index3 = fromTo(0,3);
let index4 = fromTo2(0,3);

// console.log(index3());
// console.log(index3());
// console.log(index3());
// console.log(index3());
//
// console.log(index4());
// console.log(index4());
// console.log(index4());
// console.log(index4());

function element(arr, indexGen){
  return function(){
    return arr[indexGen()];
  }
}

let ele = element(['a','b','c','d','e','f','g'], fromTo(2,4));

// console.log(ele());
// console.log(ele());
// console.log(ele());

//Modify the element function so that the generator argument is optional. If the generator is not provided, then each of the elements in the array will be produced.
function element2(arr, indexGen){
  return function(){
    if(indexGen === undefined){
      indexGen = fromTo(0,arr.length);
    }
    return arr[indexGen()];
  }
}

let ele2 = element2(['a','b','c','d','e','f','g']);

console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
