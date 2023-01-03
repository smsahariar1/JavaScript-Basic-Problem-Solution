/*
Create an array with the names of all the things you have learned so far. Then use a for loop to print output of all elements of that array.
*/

const learned = [
  "HTML",
  "CSS",
  "Responsive Design",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "Browser Devtool",
];

let i = 0;
while (i < learned.length) {
  const item = learned[i];
  i++;
  console.log(item);
}
