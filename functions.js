//functions are the main building block of any program
//2 core principles
//a. DRY (Donot repeat yourself)
//b. SoC(Separation of Concern)

//two ways to write function
//ES5
//write a sum function for adding 2 numbers

//function declare
// function sum(){}

//a,b are parameters
// function sum(a, b) {
//   //logic
//   const c = a + b;
//   return c;
// }
// //function call/execute
// const result = sum(2, 3);
// console.log({ result });

// //write a js function for finding square of a number
// function square(a) {
//   //logic
//   const sq = a * a;
//   return sq;
// }
// //function call/execute
// const result1 = square(9);
// console.log({ result1 });

//ES6
const sum = (a, b) => {
  const c = a + b;
  return c;
};
//function call/execute
const result = sum(2, 3);
console.log({ result });
