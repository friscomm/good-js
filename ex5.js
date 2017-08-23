'use strict';

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

//write a collect function that takes a generator and an array and produces a function that will collect the results in the array
var array = [];
function collect(gen, arr){
    return function(){
      let num = gen();
      if (num !== undefined){
        arr.push(num);
      }
      return num;
    }
}

let col = collect(fromTo(0,2), array);

      // console.log(col());
      // console.log(col());
      // console.log(col());
      // console.log(`Array: ${array}`);

//Write a filter function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate
function filter(generator, predicate){
  return function(){
    let value;
    do {
      value = generator();
    } while (
      value !== undefined &&
      !predicate(value)
    );
    return value;
  };
}

function third(value){
  return (value % 3) === 0;
}

let fil = filter(fromTo(0,5), third);

    // console.log(fil());
    // console.log(fil());
    // console.log(fil());

//Write a concat function that takes two generators and produces a generator that combines the sequences
function concat(gen1, gen2){
  return function(){
    let num = gen1();
    if (num !== undefined){
      return num;
    }
    return gen2();
  }
}

let con = concat(fromTo(0,3), fromTo(0,2));

console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
