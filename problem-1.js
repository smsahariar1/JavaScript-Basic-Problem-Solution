/*
Write a program to calculate average marks of Mathmetics, Biology, Chemestry, Physics and English of a student.
*/

const MathmeticsMark = 96;
const BiologyMark = 78;
const ChemestryMark = 83;
const PhysicsMark = 80;
const EnglishMark = 100;

const totalMark =
  MathmeticsMark + BiologyMark + ChemestryMark + PhysicsMark + EnglishMark;

const averageMark = totalMark / 5;
console.log("Average Marks: ", averageMark);
