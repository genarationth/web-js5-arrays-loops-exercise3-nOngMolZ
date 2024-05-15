//Write a JavaScript program to construct the following pattern, using a nested for loop.
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}

// //Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
let xValue = 10; 

while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}

//- Print all the odd numbers between 1 - 100.
let num = 1;

while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function printNumbersInBrackets(n) {
    let num = 1;

    while (num <= n) {
        process.stdout.write(`[${num}] `);
        num++;
    }
}

printNumbersInBrackets(6);


// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
function sumOfFirstNPositiveIntegers(n) {
    let sum = 0;
    let num = 1;

    while (num <= n) {
        sum += num;
        num++;
    }

    return sum;
}

console.log(sumOfFirstNPositiveIntegers(5));  
console.log(sumOfFirstNPositiveIntegers(19)); 


