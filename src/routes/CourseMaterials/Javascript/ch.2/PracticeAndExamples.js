const Chapter1 = {
    topic1: {
        example1: 
`// Define the numbers. 
const number1 = 5; 
const number2 = 10; 

// Use an 'if' statement to check if number1 is greater than number2. 
if (number1 > number2) { 
    console.log("Number1 is greater than Number2."); 
} else { 
    console.log("Number1 is not greater than Number2."); 
}`,
        practice1: 'Write an if statement to check if a number is even or odd. Declare a variable called number and assign it any integer value. Write an if statement that checks whether the number is even or odd. Use console.log() to display a message indicating whether the number is even or odd.',

        practice2: `Now, let's apply conditional statements to create a basic login system. Declare a variable called isLoggedIn and set it to true or false to represent a user's login status. Write an if-else statement to check whether the user is logged in or not. Display different messages depending on the user's login status.`,

        practice3: `In this practice, you'll simulate an online store's discount system. Create variables to represent a user's total purchase amount and their membership status (you can use a boolean value to represent membership). Write conditional statements to determine the discount percentage based on the purchase amount and membership status. Calculate and display the final amount after applying the discount.`
    },
    topic2: {
        example1: 
`// Define a number representing a day (1 for Monday, 2 for Tuesday, etc.). 
const dayNumber = 3; 
// Create a variable to store the day name. 
let dayName; 
// Use a switch statement to map the number to the corresponding day name.
switch (dayNumber) { 
    case 1: 
        dayName = "Monday"; 
        break; 
    case 2: 
        dayName = "Tuesday"; 
        break; 
    case 3: 
        dayName = "Wednesday"; 
        break; 
    default: 
        dayName = "Other day"; 
    } 
    
// Display the determined day name. 
console.log("Today is " + dayName + ".");`,
        practice1: 
        'Implement a switch statement to handle different cases based on user input. Prompt the user to enter a day of the week. Use a switch statement to display a message corresponding to the entered day.',

        practice2: `Use a switch statement to build a simple calculator that performs basic operations. Prompt the user to enter two numbers and an operator (+, -, *, /). Use a switch statement to perform the corresponding operation and display the result.`,

        practice3: `In this practice, you'll create a grading system using switch statements. Prompt the user to enter a numerical grade (e.g., 85). Use a switch statement to determine the corresponding letter grade (A, B, C, D, or F) and display it.`
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: "Write a JavaScript program that takes a number as input and uses an if statement to determine if it's even or odd. Display a message indicating the result.",
            topic: 'Introduction to Conditional Statements',
            id: 1
        },

        2: {
            practice: "Build a basic calculator that prompts the user to enter two numbers and an operator (+, -, *, /). Use a switch statement to perform the operation and display the result.",
            topic: 'Switch Statements',
            id: 2
        },

        3: {
            practice: `Create a program that prompts the user to enter a day of the week. Use a switch statement to display a message based on the day entered. For example, "It's a workday" for Monday to Thursday and "It's the weekend" for Saturday and Sunday.`,
            topic: 'Switch Statements',
            id: 3
        },

        4: {
            practice: `Develop a grading system program that prompts the user to enter a numerical grade (e.g., 85). Use a switch statement to determine the corresponding letter grade (A, B, C, D, or F) and display it.`,
            topic: 'Switch Statements',
            id: 4   
        },

        5: {
            practice: `Build a simple language translator program. Ask the user to enter a language code (e.g., "en" for English, "es" for Spanish). Use a switch statement to display a greeting message in the chosen language.`,
            topic: 'Switch Statements',
            id: 5
        }
    }
}

export default Chapter1;