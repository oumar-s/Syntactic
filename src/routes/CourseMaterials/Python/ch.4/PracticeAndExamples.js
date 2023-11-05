const Chapter1 = {
    topic1: {
        example1: 
`name = "John"`,
        practice1: 'Write a basic Python script that assigns the variable "language" the value of "Python".',

        example2: 'a, b, c = 1, 2, 3',
        practice2: 
`Write a Python script that assigns the value of '10' to 'x', '20' to 'y' and '30' to 'z' using multiple assignment.`,
        
        example3: 'x = y = z = 5',
        practice3: 
`Write a Python script that assigns the value of '99' to 'd', 'e', and 'f' using chained assignment.`
    },
    topic2: {
        example1: 
` # Example 1: Taking user input and displaying output
name = input("Enter your name: ")
age = input("Enter your age: ")
print("Hello, " + name + "!")
print("You are " + age + " years old.")`,

        example2: 
`# Input: Gather user information
name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Convert age to an integer
height = float(input("Enter your height (in meters): "))  # Convert height to a float

# Output: Display the collected information 
print("User Information:")
print("Name:", name)
print("Age:", age)
print("Height:", height, "meters")
`,

        practice1: 
        'Write a Python program that takes the a name as input and greets them with a personalized message.',

        practice2: 'Write a Python program that prompts the user to enter their name, age, and favorite color. After receiving the input, the program should print out the collected information.'    
    },

    topic3: {
        example1: 
` # Example 1: Taking user input and displaying output
name = input("Enter your name: ")
age = input("Enter your age: ")
print("Hello, " + name + "!")
print("You are " + age + " years old.")`,

        example2: 
`# Define variables of different types
chef = "Gordon Ramsay"

# Print the type of the 'chef' variable
print("Variable 'chef' is of type:", type(chef))
`,

example3: `# Define variables of different data types
integer_num = 42
float_num = 3.14
string_num = "123"

# Convert data types
float_from_int = float(integer_num)
int_from_string = int(string_num)
string_from_float = str(float_num)`,

        practice1: 
        'Define a variable called num1 and set it equal to 5. Define another called num2 and set it equal to 10. Define a third variable called sum and set it to 0. Add num1 and num2 and store the result in the sum variable. Console log the sum variable. The output should equal 15.',

        practice2: 'Write a Python program that defines variables for the following information about a person: name, age, height (in meters), and whether they are married (True or False). Then, print out the type of each variable.',

        practice3: 'Write a Python program that collects the age as a string input and converts it to an integer for further processing.'
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: "Declare a variable celsius to store a temperature in degrees Celsius. Convert it to Fahrenheit using the formula (Celsius * 9/5) + 32 and display the result using console.log.",
        2: "Write a simple JavaScript script to display an error message “Cannot divide by 0”.",
        3: "Declare two variables, num1 and num2, and assign them numerical values 10 and 5 respectively. Use console.log to display the result of adding these two numbers.",
        4: "Declare two variables, a and b, and assign them numerical values. Use alert to display the result of subtracting b from a.",
        5: "Declare a variable x and assign it a numerical value. Declare another variable y and assign it a different numerical value. Use console.log to display the result of multiplying x and y."
    }
}

export default Chapter1;
