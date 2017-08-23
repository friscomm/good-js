'use strict';

//write a counter function that returns an object containing two functions that implement an up/down counter, hiding the counter
function counter(value) {
  return {
    up: function() {
        value += 1;
        return value;
    },
    down: function() {
      value -= 1;
      return value;
    }
  };
}

let object = counter(10);
let up = object.up;
let down = object.down;

    // console.log(up());
    // console.log(up());
    // console.log(up());
    // console.log(down());
    // console.log(down());
    // console.log(down());
    // console.log(down());
    // console.log(down());
    // console.log(down());
    // console.log(down());
    // console.log(down());

//Make a revocable function that takes a binary function, and returns an object containing an invoke function that can revoke the binary funciton and a revoke function taht disables the invoke function

function add(a,b) {
  return a + b;
}

function revokable(binary) {
    return {
      invoke: function(a,b) {
        if (binary !== undefined) {
          return binary(a,b);
        }
      },
      revoke: function() {
        binary = undefined;
      }
    };
  }


let rev = revokable(add);
let add_rev = rev.invoke;
console.log(add_rev(3,4));
rev.revoke();
console.log(add_rev(6,4));
