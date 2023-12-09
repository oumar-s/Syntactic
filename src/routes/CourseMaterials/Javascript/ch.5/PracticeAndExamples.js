const Chapter1 = {
    topic1: {
        example1: 
`// Creating an array of fruits. 
const fruits = ["apple", "banana", "cherry", "date", "grape"]; // Accessing elements using indices. 
console.log("First fruit: " + fruits[0]); 
console.log("Third fruit: " + fruits[2]);`,
        practice1: `Utilize arrays to store and display a list of items. Create an array containing a list of items (e.g., fruits, movies, cities). Use a loop to display each item in the array.`,

        example2: 
`// Array of numbers to be sorted. 
const numbers = [5, 2, 8, 1, 9];

// Sorting the numbers in ascending order. 
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log("Sorted Numbers: " + sortedNumbers);`,
        practice2: 
`You are presented with an array of numbers: [5, 2, 8, 1, 9]. Your task is to perform a series of operations on this array using JavaScript array methods. Use array methods to:
Sort the numbers in ascending order.
Sort the numbers in descending order.
Find the maximum and minimum values in the array.`,        
        example3: 
`// Creating an array of colors. 
const colors = ["red", "green", "blue"]; 
// Using push() to add a new color at the end. colors.push("yellow"); 
// Using unshift() to add a new color at the beginning. colors.unshift("purple"); 
// Using pop() to remove the last color. 
const removedColor = colors.pop(); 
// Using shift() to remove the first color. 
const removedFirstColor = colors.shift(); 
// Displaying the updated array and removed elements. console.log("Updated Colors: " + colors); 
console.log("Removed Last Color: " + removedColor); console.log("Removed First Color: " + removedFirstColor);`,
        practice3: `Write a program that calculates the average of values in an array. Declare an array of numbers (e.g., [10, 15, 20, 25, 30]). Write a function called calculateAverage that takes the array as a parameter. Inside the function, calculate the average of the values in the array. Return the calculated average.`,

        example4: 
`// Array of numbers for calculating the sum. 
const numbers = [10, 15, 20, 25, 30]; 
// Using a for loop to calculate the sum. 
let sum = 0; 
for (let i = 0; i < numbers.length; i++) { 
sum += numbers[i]; 
} 
console.log("Sum of Numbers: " + sum);`,
        example5: 
`// Array of fruits. 
const fruits = ["apple", "banana", "cherry", "date", "grape"]; 
// Using a forEach loop to print each fruit. 
fruits.forEach(function(fruit) { 
    console.log("Fruit: " + fruit); 
});`
    },
    topic2: {
        example1: 
`// Creating an object with properties. 
const dog = { 
    name: "Buddy", 
    breed: "Golden Retriever", 
    bark: function() { 
        console.log("Woof! Woof!"); 
    } 
}; 
// Accessing properties and calling the method. 
console.log("Name: " + dog.name); 
console.log("Breed: " + dog.breed); 
dog.bark();`,

        example2: 
`// Creating an array of book objects. 
const libraryCatalog = [ 
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }, 
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }, 
    { title: "1984", author: "George Orwell", year: 1949 } 
]; 
// Loop through the library catalog and display book details. 
for (let i = 0; i < libraryCatalog.length; i++) { 
    const book = libraryCatalog[i]; console.log("Title: " + book.title); 
    console.log("Author: " + book.author); 
    console.log("Year: " + book.year); console.log("---------------------"); 
}`,

        practice1: `Create an object representing a person with name and age properties. Assign values to these properties to represent a person's name and age.`,

        practice2: `Create an object called car with properties such as make, model, and isRunning. Define methods within the car object, such as start and stop, to control the car's engine. Implement these methods to change the isRunning property accordingly.`,

        practice3: `Create an object called cartItem with properties such as productName, price, and quantity. Add multiple cartItem objects to an array to represent items in a shopping cart.`
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: `You are given an array of numbers: [3, 8, 2, 5, 1, 9, 4]. Implement a function called manipulateArray that performs the following operations on the array:
            Sort the numbers in descending order.
            Remove the first and last elements.
            Add the number 7 to the beginning of the array.
            Display the modified array.`,
            topic: 'Array Basics',
            id: 1
        },

        2: {
            practice: `Create an object representing a book. The book should have the following properties:
            title (string)
            author (string)
            year (number)
            isAvailable (boolean)
            Modify the book object to update the isAvailable property to false. Display the updated object.`,
            topic: 'Objects',
            id: 2
        },

        3: {
            practice: `Given an array of strings: ["apple", "banana", "cherry", "date", "grape"], implement a function called filterWords that filters out words containing more than five letters and stores the filtered words in a new array. Display the filtered array`,
            topic: 'Array Basics',
            id: 3
        },

        4: {
            practice: `Create an object representing a car. The car should have properties like make, model, and year. Add a method called startEngine to the car object. The startEngine method should display a message like "The car is now running." when invoked. Call the startEngine method to start the car.`,
            topic: 'Objects',
            id: 4   
        },

        5: {
            practice: `You are provided with an array of numbers: [12, 15, 20, 25, 30]. Write a function named calculateArrayAverage that calculates and returns the average of these numbers. Display the calculated average.`,
            topic: 'Array Basics',
            id: 5
        }
    }
}

export default Chapter1;