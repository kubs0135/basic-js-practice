//user interaction

//alert
// alert("hello world");

//prompt
// const age = prompt("How old are you?");

// //confirm
// const above18 = confirm("Are you above 18 years old");

// console.log(age, above18);

// alert(`you are ${age} years old`); //string literal

//write a js program to create sum calculator using user interaction

const num1 = prompt("ENter first number");
console.log(typeof num1);
const num2 = prompt("ENter second number");
console.log({ num1, num2 });
const sum = Number(num1) + Number(num2);
alert(`The sum of number ${num1} and ${num2} is ${sum} `);
