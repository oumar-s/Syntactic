const Chapter1 = {
	topic1: {
		example1: 'alert("Hello, World!");',
		practice1:
			'Write a simple JavaScript script to display an alert message “Welcome to my website.”',

		example2: 'console.log("Hello, World!");',
		practice2:
			'Write a simple JavaScript script to output your first and last to the web console.',

		example3: 'error("There was an error!");',
		practice3:
			'Write a simple JavaScript script to display an error on the screen.',
	},
	topic2: {
		example1: `let num = 42;            // A number
let name = "John";       // A string
let isReady = true;      // A boolean`,

		example2: `let x = 10; 
let y = 5; 
let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
console.log(sum, difference, product, quotient);
`,

		practice1:
			'Define a variable called num1 and set it equal to 5. Define another called num2 and set it equal to 10. Define a third variable called sum and set it to 0. Add num1 and num2 and store the result in the sum variable. Console log the sum variable. The output should equal 15.',

		practice2:
			'Declare two variables, length and width, and assign them values. Then, calculate the area by multiplying length and width. Finally, display the result using console.log.',

		practice3:
			'Declare multiple variables to represent the prices of different items (e.g., item1Price, item2Price, etc.), and declare a variable totalCost to store the final result. Assign prices to each item. Then, calculate the total cost by adding up the prices of all the items. Display the total cost using console.log.',
	},

	//probles are in random order for the sake of Interleaving
	exam: {
		1: {
			practice:
				'Declare a variable celsius to store a temperature in degrees Celsius. Convert it to Fahrenheit using the formula (Celsius * 9/5) + 32 and display the result using console.log.',
			topic: 'Data Types and Variables',
			id: 1,
		},

		2: {
			practice:
				'Write a simple JavaScript script to display an error message “Cannot divide by 0”.',
			topic: 'Logging Outputs in Javascript',
			id: 2,
		},

		3: {
			practice:
				'Declare two variables, num1 and num2, and assign them numerical values 10 and 20 respectively. Use console.log to display the result of adding these two numbers.',
			topic: 'Data Types and Variables',
			id: 3,
		},

		4: {
			practice:
				'Declare two variables, a and b, and assign them numerical values. Use alert to display the result of subtracting b from a.',
			topic: 'Logging Outputs in Javascript',
			id: 4,
		},

		5: {
			practice:
				'Declare a variable x and assign it a numerical value. Declare another variable y and assign it a different numerical value. Use console.log to display the result of multiplying x and y.',
			topic: 'Data Types and Variables',
			id: 5,
		},
	},
};

export default Chapter1;
