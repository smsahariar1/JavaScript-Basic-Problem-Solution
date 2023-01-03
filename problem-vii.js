/*
a. You are given three numbers 13, 79 and 45. Write a program that will print the largest number using if-else.

b. You are given a triangle with the sides 9,8,9. Write a program to check whether a triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

//Solution a:
const number1 = 13;
const number2 = 79;
const number3 = 45;

if (number1 > number2 && number1 > number3) {
  console.log("The largest number is: ", number1);
} else if (number1 < number2 && number2 > number3) {
  console.log("The largest number is: ", number2);
} else {
  console.log("The largest number is: ", number3);
}

//Solution b:

const side1 = 9;
const side2 = 8;
const side3 = 9;

if (side1 === side2 || side1 === side3) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is not isosceles");
}
