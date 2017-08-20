'use strict';

function add(a,b){
  return a + b;
}

function sub(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function twice(func){
  return function(a){
    return func(a,a);
  }
}

function reverse(func){
  return function(a,b){
    return func(b,a);
  }
}

function compose(func, func2){
  return function(a){
    return func2(func(a));
  }
}

function composeb(func, func2){
  return function(a,b,c){
    return func2(func(a,b),c);
  }
}

function limit(func, count){
  return function(a,b){
    if(count>=1){
      count-=1;
      return func(a,b);
    }
    return undefined;
  }
}



let doubl = twice(add);
let square = twice(multiply);
let bus = reverse(sub);
let add_ltd = limit(add,1);

// console.log(doubl(4));
// console.log(square(5));
// console.log(bus(8,2))
// console.log(`This is the compose function: ${compose(doubl, square)(5)}`);
// console.log(`This is the composeb function: ${composeb(add, multiply)(2,3,7)}`);
// console.log(add_ltd);
console.log(`This is the limit function: ${add_ltd(1,2)}`);
console.log(`This is the limit function: ${add_ltd(4,5)}`);
console.log(`This is the limit function: ${add_ltd(4,5)}`);
console.log(`This is the limit function: ${add_ltd(4,5)}`);
