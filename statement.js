//Statements
//1.if else
//2. switch case

//if else
// if(condition){
//     logic
// }else{
//     //logic
// }

// const gender = confirm("Are you male");
// if (gender) {
//   alert("you are male");
// } else {
//   alert("you are female");
// }

//ask user to reply m or f type

// const gend = prompt("enter m for male and f for female");
// if (gend === "m") {
//   alert("you are male");
// } else {
//   alert("you are female");
// }

//= variable assign
//== data type and value compare
///===data type and value compare +data conversion to boolean

//switch case

//write a js program to check the day of the week

// const day = Number(prompt("Enter Number 1,2 or 3"));
// switch (day) {
//   case 1:
//     alert("sunday");
//     break;
//   case 2:
//     alert("monday");
//     break;
//   case 3:
//     alert("Tuesday");
//     break;
//   default:
//     alert("you must choose between 1 and 3");
// }

//write a js program to check the grade of the student
//A:>=80
//B:>=60 but less than 80

// const marks = Number(prompt("Enter your marks"));
// switch (true) {
//   case marks >= 80:
//     alert("grade A");
//     break;

//   case marks >= 60 && marks < 80:
//     alert("grade is B");
//     break;
//   default:
//     alert("you have failed.Better luck next time");
// }

//conditional operator(Ternary Operator)

//if(){}else{} ES5
//ES6 Ternary operator

//ES5

const gender = "m";

// if (gender === "m") {
//   console.log("m");
// } else {
//   console.log("f");
// }

//ES6
//Syntax
//condition ?true:false;
gender === "m" ? console.log("m") : console.log("f"); // m
