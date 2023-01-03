/*
Write an array with the prices of all the books you have. The books whose price is above 200 dollar will be skipped. That is, they will not show as output. The rest will be displayed as output. See if you can.
*/

const bookPrice = [142, 250, 369, 471, 12, 200, 63, 124, 68, 159, 17];
for (let i = 0; i < bookPrice.length; i++) {
  const lowBookPriceList = bookPrice[i];
  if (lowBookPriceList > 200) {
    continue;
  }
  console.log(lowBookPriceList);
}
