'use strict';

function gimmeThing(x){
  console.log(`EX1 - Return given thing: ${x}`);
}

function add(a,b){
  console.log(`EX1 - Add things: ${a + b}`);
  return a + b;
}

function sub(a,b){
  console.log(`EX1 - Subtract things: ${a - b}`);
  return a-b;
}

function multiply(a,b){
  console.log(`EX1 - Multiply things: ${a * b}`);
  return a*b;
}

function identityf(f){
  return function(){
    return f;
  };
}

function addf(a){
  return function(b){
    console.log(a + b);
  }
}

function liftf(binary){
  return function(first){
    return function(second){
      return binary(first, second);
    }
  }
}

function curry(binary, first){
    return function(second){
      return binary(first, second);
    }
}



let ef = identityf(5);

// gimmeThing('favorites');
// add(3,18);
// sub(32,2);
// multiply(3,8);
// console.log(ef());
// addf(3)(4);
let addyAdd = liftf(add)(4)(20);
// console.log(addyAdd);

// var add3 = curry(add, 3);
let thingy = curry(multiply, 6)(4);
// console.log(`Thing here: ${thingy}`);

//Without writing any new functions, show three ways to create the inc function
let inc = curry(add, 1);
let inc2 = liftf(add)(1);
let inc3 = addf(1);
console.log(`This is the inc function, does it work? ${inc(inc(5))}`)
console.log(`This is the inc2 function, does it work? ${inc2(7)}`)
console.log(`This is the inc3 function, does it work? ${inc2(9)}`)
