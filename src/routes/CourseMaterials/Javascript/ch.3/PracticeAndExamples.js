const Chapter1 = {
    topic1: {
        example1: 
`// Initialize a variable to start counting. 
let count = 1; // Use a while loop to print numbers from 1 to 5. 
while (count <= 5) { 
    console.log("Number: " + count); 
    count++; // Increment the count to move to the nextnumber. 
}`,
        practice1: `Write a while loop to print numbers from 1 to 10. Initialize a variable called count with a value of 1. Use a while loop to print the numbers from count to 10. Increment the count variable within the loop.`,

        example2: 
`// Define an array of colors. 
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// Use a for loop to print each color in the array.
for (let i = 0; i < colors.length; i++) { 
    console.log("Color: " + colors[i]); 
}`,
        practice2: `Iterate through an array and display its elements. Create an array containing a list of items (e.g., fruits, cities, names). Use a for loop to iterate through the array and display each element.`,
        
        practice3: `Create a countdown timer using a for loop. Prompt the user to enter a countdown value (e.g., 10). Use a for loop to count down from the entered value and display each countdown step.`
    },
    topic2: {
        example1: 
`// Define an array of numbers. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] % 2 === 0) { 
        console.log("First even number found: " + numbers[i]);
        break; // Exit the loop as soon as an even number is found.
    } else { 
        continue; // Skip odd numbers and move to the next iteration.
    } 
}`,
        practice1: `Use break statement to exit a loop under certain conditions. Create a loop, such as a for or while loop. Within the loop, include a condition that, when met, triggers the break statement. Test the loop to ensure it exits when the condition is satisfied.`,
        practice2: `Use the continue statement to skip iterations in a loop. Create a loop, such as a for or while loop. Include a condition that, when met, triggers the continue statement. Test the loop to ensure it skips iterations when the condition is satisfied.`,
        practice3: `Write a program that searches for a specific element in an array using a loop. Create an array containing elements of your choice (e.g., numbers, strings). Prompt the user to enter a target element to search for in the array. Use a loop to iterate through the array and check for the presence of the target element. Display a message indicating whether the element was found or not.`
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: `Write a program using a loop to print even numbers from 2 to 20.`,
            topic: 'Loops Basics',
            id: 1
        },

        2: {
            practice: `Create a countdown program that starts from 10 and counts down to 1. Use a loop with a break statement to exit the loop when the count reaches 5.`,
            topic: 'Loop Control Statements',
            id: 2
        },

        3: {
            practice: `Build a program that prints numbers from 1 to 50 but skips multiples of 7 using a continue statement.`,
            topic: 'Loop Control Statements',
            id: 3
        },

        4: {
            practice: `Create an array of names. Prompt the user to enter a name to search for in the array. Use a loop with a break statement to exit the loop when the name is found or when the end of the array is reached. Display a message indicating whether the name was found or not.`,
            topic: 'Loop Control Statements',
            id: 4   
        },

        5: {
            practice: `Write a program that calculates the factorial of a number entered by the user. Use a loop to perform the calculations. The factorial of a number is the product of all positive integers from 1 to that number (e.g., 5! = 5 x 4 x 3 x 2 x 1).`,
            topic: 'Loops Basics',
            id: 5
        }
    }
}

export default Chapter1;