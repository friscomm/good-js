'use strict';

//Write a function that m that takes a value and an optional source string and returns them in an object

function m(value, source) {
  // if (source === undefined) {
  //   return{
  //     value: value
  //   }
  // }
  return {
    value: value,
    source: (typeof source === 'string') ? source : String(value)
  };
}

    // console.log(m(1));
    // console.log(m(1, 'a book'));
    // console.log(m(518));
    // console.log(m(Math.random(), 'The Rules of the Universe, and math'));


// function addm(one, two) {
//    return {
//      value: one.value + two.value,
//      source: `(${one.source === undefined ? one.value : one.source}+${two.source === undefined ? two.value : two.source})`
//    }
// }

function addm(one, two) {
   return m(
     one.value + two.value,
    "(" + one.source + "+" + two.source + ")"
   )
}

let newObj = addm(m(3), m(5));
let newObj2 = addm(m(4), m(12, 'my brain!'));
console.log(newObj);
console.log(newObj2);
