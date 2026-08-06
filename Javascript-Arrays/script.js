let ages = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const schoolages = [12, 13, 14, 15, 16];
const numbers = [5, 10, 15, 20];
const prices = [100, 200, 300, 400];

const adults = ages.filter(function (age) {
    return age >= 18;
})
console.log(adults);

const teenagers = ages.filter(function (age) {
    return age < 18;
})
console.log(teenagers)

const evenNumber = ages.filter(function (age) {
    return age % 2 === 0;
})
console.log(evenNumber);

const schoolsages = schoolages.map(function (schoolsage) {
    return schoolsage + 10;
})
console.log(schoolsages);

const scholsages = schoolages.find(function (schoolsage) {
    return schoolsage > 10;
})
console.log(scholsages);

let number = numbers.find(function(number) {
    return number > 10;
});
console.log(number);

let number1 = numbers.findIndex(function(number) {
    return number > 10;
});
console.log(number1);

const hasAdult = ages.some(function(age) {
    return age >= 18;
});

console.log(hasAdult);

const hasOdd = numbers.some(function(number) {
    return number % 2 !== 0;
});
console.log(hasOdd);

const allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven);

const total = prices.reduce(function(total, price) {
    return total + price;
}, 0);
console.log(total);