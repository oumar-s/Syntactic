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
        'Write a Python program that takes the name as input and greets them with a personalized message.',

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
        'Write a Python program that defines variables for the following user attributes: name, age, favorite color, and whether the user is a student. Then, print out the user information',

        practice2: 'Write a Python program that defines variables for the following information about a person: name, age, height (in meters), and whether they are married (True or False). Then, print out the type of each variable.',

        practice3: 'Write a Python program that collects the age as a string input and converts it to an integer for further processing.'
    },

    exam : {
        1: {
            practice: `Declare two variables, 'distance' and 'time', and assign values to them (e.g., 150 and 2.5). Calculate the speed by dividing distance by time and print the result.`,
            topic: 'Variables in Python',
            id: 1
        },

        2: {
            practice: "Create a variable 'message' with a string value containing a short message of your choice. Print the message to the console.",
            topic: 'Variables in Python',
            id: 2
        },

        3: {
            practice: "Write a Python program that prints a decimal number with a few decimal places (e.g., 3.14159) to the console.",
            topic: 'Data Types in Python',
            id: 3
        },

        4: {
            practice: `Write a Python program that prompts the user to enter their age. Then, calculate and print the year in which they will turn 100 years old.`,
            topic: 'Input and Output in Python',
            id: 4   
        },

        5: {
            practice: `Declare a variable 'price' as a float and assign a price value with decimal places (e.g., 19.99). Convert it to an integer and print the result.`,
            topic: 'Data Types in Python',
            id: 5
        }
    }
}

export default Chapter1;
