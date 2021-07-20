console.log('**JS Micro Challenge**');

// --100-Addition--
// Create a function that takes two numbers and return the sum
function sumOfTwoNumbers (numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  return sum;
} // end sumOfTwoNumbers

console.log('100-Addiiton');
console.log('5 + 5 equals =',sumOfTwoNumbers(5, 5));            // expected output 10  
console.log('13 + 15 equals =',sumOfTwoNumbers(13, 15));        // expected output 28
console.log('2 + 54 equals =',sumOfTwoNumbers(2, 54));          // expected output 56


// --110-Conditional--
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
console.log(compareTwoNumbers(7, 5));           // expected output 'The first number was bigger!'
console.log(compareTwoNumbers(5, 7));           // expected output 'The second number was bigger!'
console.log(compareTwoNumbers(7, 7));           // expected output 'The numbers are the same!'


// --120-Arrays--
// Create a function that takes in an array.
// Add the first and last values of the array

function sumOfFirstAndLastValues (array) {
    let sum = array[0] + array[array.length - 1];
        return sum;
} // end sumOfFirstAndLastValues

console.log('120-Arrays');
console.log(sumOfFirstAndLastValues([3, 5, 7, 9, 11]));         // expected output 14
console.log(sumOfFirstAndLastValues([2, 4, 6, 8, 10]));         // expected output 12

// Q: Unsure of why it also returning a line with undefined 


// --130-LoopsArraysAndConcatentation--
// Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.
// Your function should return a string that combines all of the values starting 
// at the index of the number passed in through the end of the array.

function combineArrayElements (array, index) {
    // need to start indexNumber
    array.slice(index);
    // then concat all remaining values in array
    return array.join(' ');
} // end combineArrayAndNumber

// Q:  I'm unsure of why the array won't start at the index input

console.log('130-LoopsArraysAndConcatentation');
console.log(combineArrayElements (['Hello', 'Tim,', 'Good', 'Day!'], 2));           // expected output 'Good Day!'
console.log(combineArrayElements (['Hello', 'Tim,', 'Good', 'Day!'], 1));           // expected output 'Tim, Good Day!'


// --140-LoopsArrayOfObjects--
// Create a function that takes in an array of employee objects.
// Each employee object will come in with a property called yearsOfExperience. 
// Your function should return the total years of experience for all of the employees.

function employeeInfo (array) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        sum += array[i].yearsOFExperience;
    }
    return sum;
}

console.log('140-LoopsArrayOfObjects');
console.log(employeeInfo[                                   
    {name: 'John', yearsOFExperience: 6},
    {name: 'Rose', yearsOFExperience: 5}
]);                                                                                 // expected output 11
console.log(employeeInfo[                                   
    {name: 'Amanda', yearsOFExperience: 2},
    {name: 'Tony', yearsOFExperience: 2}
]);                                                                                 // expected output 4


// --150-LoopsAndTwoDimensionalArrays--
// Create a function that takes in an array of arrays.
// Add up all of the numbers in all of the arrays and return the value.

function sumOfArrays (array) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        sum + array[i];
    }
    return sum;
} // end sumOfArrays

console.log('150-LoopsAndTwoDimensionalArrays');
console.log(sumOfArrays([ [1, 2, 3], [4, 5, 6] ]));                                 // expected output 21
console.log(sumOfArrays([ [0, 2, 4], [6, 8, 10] ]));                                 // expected output 30
