/*
You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is:

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less or equal F grade

write a program to find your and your frineds grades using if-else

*/

const myScore = 85;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;

if (myScore <= 39) {
  console.log("You failed.");
} else if (myScore === 40 || myScore <= 49) {
  console.log("You got D");
} else if (myScore === 50 || myScore <= 59) {
  console.log("You got C");
} else if (myScore === 60 || myScore <= 79) {
  console.log("You got B");
} else {
  console.log("You got A");
}

if (tomScore <= 39) {
  console.log("Tom failed.");
} else if (tomScore === 40 || tomScore <= 49) {
  console.log("Tom got D");
} else if (tomScore === 50 || tomScore <= 59) {
  console.log("Tom got C");
} else if (tomScore === 60 || tomScore <= 79) {
  console.log("Tom got B");
} else {
  console.log("Tom got A");
}

if (janeScore <= 39) {
  console.log("Jane failed.");
} else if (janeScore === 40 || janeScore <= 49) {
  console.log("Jane got D");
} else if (janeScore === 50 || janeScore <= 59) {
  console.log("Jane got C");
} else if (janeScore === 60 || janeScore <= 79) {
  console.log("Jane got B");
} else {
  console.log("Jane got A");
}
if (peterScore <= 39) {
  console.log("Peter failed.");
} else if (peterScore === 40 || peterScore <= 49) {
  console.log("Peter got D");
} else if (peterScore === 50 || peterScore <= 59) {
  console.log("Peter got C");
} else if (peterScore === 60 || peterScore <= 79) {
  console.log("Peter got B");
} else {
  console.log("Peter got A");
}
if (johnScore <= 39) {
  console.log("John failed.");
} else if (johnScore === 40 || johnScore <= 49) {
  console.log("John got D");
} else if (johnScore === 50 || johnScore <= 59) {
  console.log("John got C");
} else if (johnScore === 60 || johnScore <= 79) {
  console.log("John got B");
} else {
  console.log("John got A");
}
