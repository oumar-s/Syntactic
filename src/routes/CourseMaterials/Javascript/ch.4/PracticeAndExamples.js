const Chapter1 = {
    topic1: {
        example1: 
`// Declare a function called doubleNumber that takes a number as a parameter. 
function doubleNumber(number) { 
    // Calculate the double of the input number. 
    const result = number * 2; 
    // Return the double value. 
    return result; 
} 
// Call the function and store the result in a variable. 
const doubledValue = doubleNumber(5); // Display the result. console.log("Doubled Value: " + doubledValue);`,

        practice1: `Write a simple function to calculate the square of a number. Declare a function called calculateSquare that takes a number as a parameter. Inside the function, calculate the square of the input number. Use the return statement to return the square value.`,

        example2: 
`// Declare a function called greetUser that takes a name as a parameter. 
function greetUser(name) { 
    // Construct a greeting message. 
    const message = "Hello, " + name + "!"; 
    // Display the message. 
    console.log(message); 
} 
// Call the function with a name. 
greetUser("John");`,

        practice2: `Create a function to find the factorial of a given number. Declare a function named calculateFactorial that takes a positive integer as a parameter. Write code inside the function to calculate the factorial of the input number. Return the factorial value.`,
        
        example3: 
`// Declare a function called isEven that takes a number as a parameter. 
function isEven(number) { 
    // Check if the number is even. 
    if (number % 2 === 0) { 
        // If even, return true. 
        return true; 
    } else { 
        // If not even, return false. 
        return false; 
    } 
} 
// Call the function and store the result in a variable. 
const checkEven = isEven(8); 
// Display the result. 
console.log("Is the number even? " + checkEven);`,
        practice3: `Create a function that checks if a year is a leap year. Declare a function named isLeapYear that takes a year (e.g., 2023) as a parameter. Write code inside the function to determine if the input year is a leap year or not. Return true if it's a leap year, and false otherwise.`
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: `Create a function called multiplyAndDivide that takes three numbers as parameters: a, b, and c. Inside the function, calculate the result of multiplying a by b and then dividing the result by c. Return the final result.`,
            topic: 'Functions Basics',
            id: 1
        },

        2: {
            practice: `Develop a function named powerOf that takes two numbers as parameters: base and exponent. Inside the function, calculate the result of raising base to the power of exponent. Return the result.`,
            topic: 'Functions Basics',
            id: 2
        },

        3: {
            practice: `Build a function called findMax that takes three numbers as parameters: a, b, and c. Inside the function, determine which of the three numbers is the largest and return that maximum value.`,
            topic: 'Data Types and Variables',
            id: 3
        },

        4: {
            practice: `Create a function named countEvenOdd that takes an array of integers as a parameter. Inside the function, count the number of even and odd integers in the array separately. Return an object containing the counts, like this: { even: 3, odd: 2 }.`,
            topic: 'Functions Basics',
            id: 4   
        },

        5: {
            practice: `Write a JavaScript function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.`,
            topic: 'Functions Basics',
            id: 5
        }
    }
}

export default Chapter1;