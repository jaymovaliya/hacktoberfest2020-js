/*
  IIFE:- IIFE stands for Immediately-invoked Function Expressions i.e. it is a way to execute functions immediately, as soon as they are created.
  IIFE has its own scope. i.e. the variables you declare in the Function Expression will not be available outside the function.
*/

// without parameter
(function() {
  const a = 2;
  console.log(a*2);
})();

// with parameter
(function(a,b){
  const sum = a + b;
  console.log(sum);
})(2,3);
