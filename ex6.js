'use strict';

//Make a function gensymf that makes a function that generates unique symbols
function gensymf(symbol){
  let number = 0;
  return function(){
    number += 1;
    return symbol + number;
  }
}

let genG = gensymf("G");
let genH = gensymf("H");

// console.log(genG());
// console.log(genH());
// console.log(genG());
// console.log(genH());

function gensymff(unaryFun,seed){
  return function(symbol){
    let number = seed;
    return function(){
      number += unaryFun();
      return symbol + number;
    }
  }
}

function inc(unit){
  if(unit === undefined){
    return 1;
  }
  return unit;
}

let gensymf2 = gensymff(inc, 0);
let genG2 = gensymf2("G");
let genH2 = gensymf2("H");

// console.log('Here is the factory-factory function');
// console.log(genG2());
// console.log(genH2());
// console.log(genG2());
// console.log(genH2());


function fibonaccif(first, second){
  let count = 0;
  return function(){
    switch(count){
      case 0:
        count += 1;
        return first;
      case 1:
        count += 1;
        return second;
      default:
        let nextNum = first + second;
        first = second;
        second = nextNum;
        return nextNum;
    }
  };
}

let fib = fibonaccif(0,1);

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
