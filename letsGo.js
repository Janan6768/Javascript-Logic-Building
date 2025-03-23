// Problem Statement-1
// Write a program that print 'Hello World!' on the console.
// console.log('Hello World!');

// Problem Statement-2
// write a function that takes 2 number as input and prints their sum.
function sumOfTwoNumbers(num1,num2) {
    let sum = num1 + num2;
    // console.log('Your Sum of Numbers is : ',sum);
}
sumOfTwoNumbers(2,3);
sumOfTwoNumbers(235,265);
sumOfTwoNumbers(-2,5);
sumOfTwoNumbers(-2,-5);
sumOfTwoNumbers(1.5,5);
sumOfTwoNumbers(1.5,2.5);

// Problem Statement-3
// write a function that calculate and print the Area of rectangle
// given its length and width
function calculateAreaOfRectangle(length,width){
    if(length <= 0) {
        throw new RangeError('Length Should be a Positive Number...');
    }
    if(width <= 0) {
        throw new RangeError('Width Should be a Positive Number...');
    }
    let rectangle = length * width;
    // console.log('The Area of Rectangle is : ',rectangle);
}
calculateAreaOfRectangle(2,3);
calculateAreaOfRectangle(235,265);
// calculateAreaOfRectangle(-2,5);
// calculateAreaOfRectangle(-2,-5);
calculateAreaOfRectangle(1.5,5);
calculateAreaOfRectangle(1.5,2.5);

// Problem Statement-4
// write a function that tells if a given Number is Even or Odd
function NumberChecker(num1) {
    if (num1 % 2 === 0) console.log(num1, ': Its an Even Number');
    else console.log(num1, ': Its an Odd Number');
}
NumberChecker(6);
NumberChecker(5);
NumberChecker(-7);
NumberChecker(-0);
console.log('----------------');

//             ----With Turnarey Operator-----
function NumberChecker2(num1) {
    return num1 % 2 === 0 ? 'Even' : 'Odd';
}
console.log('6 is : ',NumberChecker2(6));
console.log('5 is : ',NumberChecker2(5));
console.log('-10 is : ',NumberChecker2(-10));
console.log('0 is : ',NumberChecker2(0));

// Problem Statement-5
// write a function that find and print the smallest Number
// among the 3 Numbers
function findTheSmallestNumber(num1,num2,num3) {
    
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3))
        return "Error : Please enter a valid number, not a string.";

    if (num1 === num2 && num2 === num3)
        return "All Numbers are Equal..."; 
    
    return (num1 < num2 && num1 < num3) ? `First Number Is the Smallest: ${num1}`
    : (num2 < num1 && num2 < num3) ? `Second Number Is the Smallest: ${num2}`
    :`Third Number Is the Smallest: ${num3}`;

}
console.log(findTheSmallestNumber(5,7,9));
console.log(findTheSmallestNumber(7,5,6));
console.log(findTheSmallestNumber(7,5,3));
console.log(findTheSmallestNumber(5,5,5));
console.log(findTheSmallestNumber(5,0,5));
console.log(findTheSmallestNumber(1.3,2,5));
console.log(findTheSmallestNumber(-6,-1,5));
console.log(findTheSmallestNumber('ok',-1,5));
console.log('----------------------------------');

