// Problem Statement-1
// Write a program that print 'Hello World!' on the console.
console.log('Hello World!');

// Problem Statement-2
// write a function that takes 2 number as input and prints their sum.
function sumOfTwoNumbers(num1,num2) {
    let sum = num1 + num2;
    return `Your Sum of Numbers is : ${sum}`
}
console.log(sumOfTwoNumbers(2,3));
console.log(sumOfTwoNumbers(235,265));
console.log(sumOfTwoNumbers(-2,5));
console.log(sumOfTwoNumbers(1.5,5));
console.log(sumOfTwoNumbers(1.5,2.5));

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

// problem Statement-6
// write a function that return the reverse of a string

function reverseString(inputString){
    if(typeof inputString !== 'string') {
        return 'Error : Please put a String not a number'
    }
    let result = '';
    for(let i = inputString.length-1; i>=0; i--) {
        // result = result + inputString[i]
        result += inputString[i]
    }
    return result;
}
console.log(reverseString('Janan'));
console.log(reverseString('Software Development'));
console.log(reverseString(20));
console.log('-----------------------');


function reverseString2(inputNumber) {
    if (typeof inputNumber !== 'string') {
        return 'Error : Please put a String not a number'
    }
    return inputNumber.split('').reverse().join('');
}
console.log(reverseString2('khan'));
console.log(reverseString2('janan'));
console.log(reverseString2('ReactJS Node.js'));
console.log(reverseString2(1234));
console.log('-----------------------');

// problem statement-7
// write a function that calculate factorial of a given number

function factorialOfNumber(inputNumber) {
    inputNumber = Number(inputNumber);
    if(isNaN (inputNumber)) {
        return 'Error : PLease enter a Number...'
    }

    if(inputNumber < 0) {
        return 'Error : Value should be equall or greater then Zero'
    }

    let result = 1;
    for(let i = 1; i <= inputNumber; i++) {
        // result = result * i;
        result *= i;
    }
    return result;
}
console.log('4! : ',factorialOfNumber(4));
console.log('10! : ',factorialOfNumber(10));
console.log('0! : ',factorialOfNumber(0));
console.log('1! : ',factorialOfNumber(1));
console.log('-2! : ',factorialOfNumber(-2));
console.log('asd: ',factorialOfNumber('asd'));
console.log('----------------------------------');

function factorialNumberUsingRecursion(inputNumber){
    inputNumber = Number(inputNumber);
    if(isNaN (inputNumber)) {
        return 'Error : PLease enter a Number...'
    }
    if(inputNumber < 0) {
        return 'Error : Value should be equall or greater then Zero';
    }
    if (inputNumber === 0 || inputNumber === 1) {
        return 1;
    }

    return inputNumber * factorialNumberUsingRecursion(inputNumber - 1);   
}
console.log('4! : ',factorialNumberUsingRecursion(4));
console.log('10! : ',factorialNumberUsingRecursion(10));
console.log('0! : ',factorialNumberUsingRecursion(0));
console.log('1! : ',factorialNumberUsingRecursion(1));
console.log('-2! : ',factorialNumberUsingRecursion(-2));
console.log('asd: ',factorialNumberUsingRecursion('asd'));
console.log('----------------------------------');

// problem-statement-8
// write a function to cheack is leap year or not
// leap year means => every forth year 
function isLeapYear(year) {
    year = Number(year);
    if(isNaN (year)) return 'Error : PLease enter a Number...';
    if(year <= 0) return 'Input should be Greater then Zero';
    return year % 4 === 0;
}
console.log('isleap Year : (2000) ',isLeapYear(2000));
console.log('isleap Year : (2001) ',isLeapYear(2001));
console.log('isleap Year : (2022) ',isLeapYear(2022));
console.log('isleap Year : (2024) ',isLeapYear(2024));
console.log('isleap Year : (2026) ',isLeapYear(2026));
console.log('isleap Year : (0) ',isLeapYear(0));
console.log('isleap Year : (zxc) ',isLeapYear('zxc'));
console.log('---------------------------------------------');


// // problem-statement-9
// write a function to calculates and print the sum of the digits
// of a Given Number e.g : 456 = 4+5+6.
function calculateSumOfDigits(inputNumber) {
    inputNumber = Number(inputNumber);

    if(isNaN (inputNumber)) return 'Not a Number...';
    if(!Number.isInteger(inputNumber)) return 'Value must be a whole number (no decimals allowed)';
    if(inputNumber <= 0) return 'Value Must be Positive Number';

    return inputNumber.toString().split('').map(Number)
    .reduce((sum,digit) => sum + digit,0);
}
console.log('Sum Of 222 => ',calculateSumOfDigits(234));
console.log('Sum Of qwe => ',calculateSumOfDigits('qwe'));
console.log('Sum Of 234 => ',calculateSumOfDigits(234));
console.log('Sum Of 1.7 => ',calculateSumOfDigits(1.7));
console.log('Sum Of 99999 => ',calculateSumOfDigits(99999));
console.log('Sum Of -2.0 => ',calculateSumOfDigits(-2.0));
console.log('Sum Of 1 => ',calculateSumOfDigits(1));
console.log('Sum Of -15 => ',calculateSumOfDigits(-15));
