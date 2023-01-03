/*
You are give an array:
const fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of Banana and replace Banana with Mango.
b) Remove Orange and add Watermelon.
*/

//Solution a:
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

const indexOfBanana = fruits.indexOf("Banana");
console.log("The index of Banana is: ", indexOfBanana);

fruits[1] = "Mango";
console.log("Banana Replaced mango", fruits);

//Solution b:
fruits.pop();
console.log("Orange is removed", fruits);

fruits.push("Watermelon");
console.log("Watermelon is added", fruits);
