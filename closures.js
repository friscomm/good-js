'use strict';

let digit_name = (function (){
  let names = ['hi','there','friendly','friend','whats','going','on?'];

  return function(n) {
      return names[n];
  };
}());

console.log(digit_name(3));
