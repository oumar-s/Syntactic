const Chapter1 = {
    topic1: {
        example1: 
`let str = "Hello, World!"; // Example string
// Accessing characters at specific indices
let firstCharacter = str[0]; // Gets the first character 'H'
let fifthCharacter = str[4]; // Gets the fifth character 'o'
let lastCharacter = str[str.length - 1]; // Gets the last character '!'
console.log(firstCharacter); // Outputs: 'H'
console.log(fifthCharacter); // Outputs: 'o'
console.log(lastCharacter);  // Outputs:`,
        practice1: 'Write a JavaScript program that displays the first character of your name.',

        example2: 
`let str1 = "Hello, "; 
let str2 = "World!"; 
let greeting = str1 + str2; // Concatenates str1 and str2 console.log(greeting); // Outputs: "Hello, World!"`,
        practice2: 'Create a program that combines your first and last name and displays a message that says, "Hello, [full name]!" using string concatenation.',
        
        example3: 
` let name = "Alice";
let greeting = \`Hello, \${name}!\`; // Concatenates with variable
console.log(greeting); // Outputs: "Hello, Alice!"`,
        practice3: `Write a program that uses a template literal to display your name and age in  a format like, "Hello, [your name]! You are [your age] years old."`
    },
    topic2: {
        example1: 
`let str = "Hello, World!";
let lengthOfStr = str.length; // Getting the length of the string
console.log(lengthOfStr); // Outputs: 13`,
        practice1: 
        `Write a JavaScript program that calculates and displays the number of characters (including spaces) in the following sentence using the length property. “A very short string.”`,

        practice2: 'Write a JavaScript program that checks if a given string has more than 10 characters. Declare a string variable and use the length property to determine its length. Then, use an if statement to display whether the string is "Long" (more than 10 characters) or "Short" (10 characters or fewer).',

        practice3: 'Declare multiple string variables and calculate and display their respective lengths using the length property. '
    },

    topic3: {
        example1:
`let originalString = "Hello, World!";
let uppercaseString = originalString.toUpperCase();
console.log(uppercaseString); // Outputs: "HELLO, WORLD!"`,
        example2:
`let originalString = "Hello, World!";
let slicedString = originalString.slice(0, 5);
console.log(slicedString); // Outputs: "Hello"`,
        example3: 
`let sentence = "This is a practice sentence.";
let words = sentence.split(" ");
console.log("Words:", words);`,
        practice1: `Write a JavaScript program that converts your name to uppercase using the toUpperCase() method. Then, display a message that says, "Hello, [UPPERCASE NAME]!".`,
        practice2: `Write a JavaScript program that takes an email address as a string and uses the slice() method to extract and display the domain part of the email address. Email:"john.doe@example.com."`,
        practice3: `Create a program that takes a comma-separated values (CSV) string as input and splits it into an array of elements using the split() method. csvData:"John,Doe,30,New York";:`
        
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: `Create a program that declares two variables, \`name\` and \`age\`. Use string concatenation and template literals to display a message like, "Hello, [name]! You are [age] years old.`,
            topic: 'String Basics',
            id: 1
        },

        2: {
            practice: `Declare a string variable and access and display the second character in the string using its index.`,
            topic: 'String Basics',
            id: 2
        },

        3: {
            practice: `Using your favorite quote, determine its length. Then, convert the sentence to uppercase using the \`toUpperCase()\` method and display both the original length and the length after conversion.`,
            topic: 'String Length',
            id: 3
        },

        4: {
            practice: `Declare a long string. Use the \`slice()\` method to extract a portion of the string (e.g., the first 10 characters) and then concatenate it with another string. Display the result.`,
            topic: 'String Methods',
            id: 4   
        },

        5: {
            practice: `Use the \`split()\` method to split your favorite quote into an array of words. Then, display the words in reverse order.`,
            topic: 'String Methods',
            id: 5
        }
    }
}

export default Chapter1;