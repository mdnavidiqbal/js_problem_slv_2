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



