// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = Math.min(167, 190, 120, 165, 137);
console.log(Math.min(heights2));

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'ak'];
let smallestName = heights3[0];
for (const name of heights3) {
    if (name.length < smallestName.length) {
        smallestName = name;
    }
}
console.log("The smallest name is : ", smallestName);


// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(item1, item2, item3) {
    const total_price = item1 + item2 + item3;
    return total_price;
}
let price = calculateElectronicsBudget(35000, 15000, 20000);
console.log("The total price is : ", price);

