//!Create a function to calculate Average to a group of numbers (at least 10 numbers)
function average(...num) {
  var sum = 0;
  if (num.length > 10) {
    for (let index = 0; index < num.length; index++) {
      sum += num[index];
    }
    return `The Average : ${sum / num.length}`;
  }
  return "Enter at least 10 numbers";
}
console.log(average(4, 8, 7, 78, 87, 99, 888, 11)); //Enter at least 10 numbers
console.log(average(90, 80, 70, 99, 96, 77, 88, 95, 98, 87, 97)); // "The Average :88.81818181818181
/*
! Write a function that takes the base and height of a triangle and return its area*/
function area(base, height) {
  return `The Triangle Area : ${(base * height) / 2}`;
}
console.log(area(30, 15)); //The Triangle Area : 225

//! Create a function that takes the age in years and  returns the age in days and print it on console
function ageindays(age) {
  return `The age in days: ${age * 365}`;
}
console.log(ageindays(19)); //The age in days: 6935
//! Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum
function sum(num1, num2) {
  return `The sum is : ${num1 + num2}`;
}
console.log(sum(10, 62)); //The sum is : 72
//! Create a function that takes an array containing only numbers and return the first element
function array(...nums) {
  function isNum(nums) {
    return typeof nums === "number";
  }
  if (nums.every(isNum)) {
    return `The first element : ${nums[0]}`;
  }
  return `The array Accept only numbers `;
}
console.log(array(5, 2, 6, "Mariam")); //The array Accept only numbers
console.log(array(10, 51, 90, 71)); //The first element : 10
//! Create a function show your name in HTML document
function name1(fName, lName) {
  return document.write(`<h3>The Name : <span>${fName} ${lName}</span></h3>`);
}
name1("mariam", "Abu Jamea"); //The Name : mariam Abu Jamea
//! Write a function that takes an integer hours and converts it to second .
function convertsH_S(hours) {
  return `The hours in Second : ${hours * 60 * 60}`;
}
console.log(convertsH_S(1)); //The hours in Second : 3600
//! Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
function numbersA_S(num1, num2, num3, num4) {
  return document.write(
    `<h4>` + `The result : ${num1 + num2 + num3 + num3 > 350}` + `</h4>`
  );
}
numbersA_S(20, 50, 60, 80);
//!مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع false
function cheek(num) {
  return num == 0;
}
console.log(cheek(8)); //false
console.log(cheek(0)); //true
//! عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة ) مختلفة (
function mode(num1, num2) {
  return `The remainder of the division : ${num1 % num2}`;
}
console.log(mode(20, 2)); //The remainder of the division : 0
//! Find the largest of two number Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function max(num1, num2) {
  if (num1 > num2) {
    return `The largest number : ${num1}`;
  } else if (num2 > num1) {
    return `The largest number : ${num2}`;
  } else if (num2 == num1) {
    return `They are equal : ${num2} = ${num1}`;
  }
}
console.log(max(9, 5)); //The largest number : 9
console.log(max(5, 5)); //They are equal : 5 = 5
//!Check if input variable is a number or not
function IsNum(num) {
  if (typeof num === "number") {
    return "The input is a number";
  } else {
    return "The input is not a number";
  }
}
console.log(IsNum(44)); //The input is a number
//! Write a JavaScript function to get the current date
function CurrDate() {
  return `The Current Date : ${Date()}`;
}
console.log(CurrDate()); //The Current Date : Sun Oct 01 2023 21:10:13 GMT+0300 (توقيت شرق أوروبا الصيفي)
