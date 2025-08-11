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

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];

function countAverage(arr){
    
let priceArrary = [];
for( let phone of phones){
    priceArrary.push(phone.price);
}
console.log("The phone prices array : ",priceArrary);
let lenArray = priceArrary.length;
console.log("The length of array is : ",lenArray);
sum = 0;
for(num of priceArrary){
    sum += num;
}
console.log("The sum of phone prices is : ",sum);
const average = sum / lenArray;
return average;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const average = countAverage(phones);
console.log("The average of mobile prices is : ",average.toFixed(2)); // toFixed() we use it show the number after (.)

