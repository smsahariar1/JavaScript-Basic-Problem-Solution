/*
Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.
*/

const harrysMoney = 1000;
const orangePrice = 370;
const applePrice = 310;

const totalCost = orangePrice + applePrice;
const shopkeeperReturn = harrysMoney - totalCost;
console.log("Shopkeeper will return: ", shopkeeperReturn, "Taka");
