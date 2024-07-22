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

/*
Types of function
1.Default function
2.parameterized function
3.arrow function
4.closure
5.IIFes
6.recursive function
7.inline function
8.anonymous function
9.callback function
10.pure function
11.implicit function
12.explicit function


*/

//default

const defaultFunc = (name1 = "user") => {
  console.log(`Hello ${name1}`);
};

defaultFunc("Admin");
defaultFunc();

//parameterized function

const sumation = ({ a, b, c, d }) => {
  console.log(`Sum is:${a + b + c + d}`);
};
sumation({ a: 2, b: 3, d: 1, c: 1 });

//Arrow Function

const summations = (a, b) => {
  return a + b;
};

//Closure Function

const mainCounter = () => {
  let count = 0;
  return () => {
    count = count + 1;
    return count;
  };
};

const count1 = mainCounter(); //dasjhain counter
const count2 = mainCounter(); //new year counter

console.log(count1());
console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());

//5. IIFEs (Immediately Invoked Functional Expression)
//DevOps engineer le use garxan(Database seeding)
((namek) => {
  console.log(`hello ${namek}`);
})("kuber");

//6.Recursive Function

//factorial of 5

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

//write a recursion formula for countdown

const countDown = (counter) => {
  console.log(counter);
  let counts = counter - 1;
  if (counts === 0) return 0;
  return countDown(counts);
};

countDown(10);

//7.inline function
const test = () => {
  const d = 1;
  console.log({ d });
};

const d = 5;

function testss() {
  console.log("global func", { d });
}

test();
testss();
//8.anonymous function
(a) => {
  console.log(a);
};

//9.callback function

const print = (data) => {
  console.log({ data });
};

const parent = (func) => {
  const num = "kubewrrrrr";
  func(num);
};

parent(print);

//10. pure function
const upperConverter = (text) => {
  console.log(text.toUpperCase());
};

upperConverter("kuber kathayat");

//11. implcit function

const summm = (a, b) => a + b;
console.log(summm(2, 4));

//12. explicit function
const summmmm = (a, b) => {
  return a + b;
};
console.log(summmmm(5, 14));
