console.log('**JS Micro Challenge**');

// 100-Addition
// Create a function that takes two numbers and return the sum
function sumOfTwoNumbers (numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  return sum;
} // end sumOfTwoNumbers

console.log('100-Addiiton');
console.log('5 + 5 equals =',sumOfTwoNumbers(5, 5));            // expected output 10  
console.log('13 + 15 equals =',sumOfTwoNumbers(13, 15));        // expected output 28
console.log('2 + 54 equals =',sumOfTwoNumbers(2, 54));          // expected output 56


// 110-Conditional
// Create a function that checks two numbers.
// If the first number is bigger, return 'The first number was bigger!'.
// if the second number is bigger, return 'The second number was bigger!'.
// If they are the same, return 'The numbers are the same!'.

function compareTwoNumbers (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return console.log('The first number was bigger!');
    }
    else if (numberOne < numberTwo) {
        return console.log('The second number was bigger!');
    }
    else if (numberOne === numberTwo) {
        return console.log('The numbers are the same!');
    }
} // end compareTwoNumbers

console.log('110-Conditonal');
console.log(compareTwoNumbers(7, 5));           // output 'The first number was bigger!'
console.log(compareTwoNumbers(5, 7));           // output 'The second number was bigger!'
console.log(compareTwoNumbers(7, 7));           // output 'The numbers are the same!'