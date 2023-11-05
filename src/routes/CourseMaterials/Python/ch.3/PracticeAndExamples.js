const Chapter1 = {
    topic1: {
        example1: 
`# Addition (+):
# The addition operator allows you to add two or more numbers, whether they are integers or floating-point numbers.
# Example:
result = 5 + 3.2  # Result is 8.2

# Subtraction (-):
# The subtraction operator allows you to subtract one number from another.
# Example:
result2 = 10.5 - 7  # Result is 3.5

# Multiplication (*):
# The multiplication operator lets you multiply numbers, whether they are integers or floating-point numbers.
# Example:
result3 = 4 * 6.0  # Result is 24.0

# Division (/):
# The division operator allows you to divide one number by another, resulting in a floating-point value.
# Example:
result4 = 9 / 3  # Result is 3.0

# Integer Division (//):
# The integer division operator returns the quotient of division as an integer (rounding down).
# Example:
result5 = 10 // 3  # Result is 3

# Modulus (%):
# The modulus operator returns the remainder after division.
# Example:
result6 = 11 % 4  # Result is 3

# Exponentiation (**):
# The exponentiation operator raises one number to the power of another.
# Example:
result7 = 2 ** 3  # Result is 8

# Increment (+=) and Decrement (-=):
# The increment and decrement operators are used to add or subtract a value from a variable.
# Example:
count += 1  # Increment count by 1`,
        practice1: 'Write a Python program that calculates the area of a rectangle. Collect the length and width of the rectangle as float inputs and then calculate and display the area.',

        example2: 'a, b, c = 1, 2, 3',
        practice2: 
`Write a Python program that calculates the average of three numbers. Collect three numbers as float inputs and then calculate and display their average.`,
        
        example3: 'x = y = z = 5',
        practice3: 
`Write a Python program that converts a given number of minutes into hours and remaining minutes. Collect the number of minutes as an integer input and then calculate and display the equivalent hours and minutes.`
    },
    topic2: {
        example1: 
`#Length of a String
text = "Hello, World!"
length = len(text)  # length is 13

#Concatenation
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # full_name is "John Doe"

#Accessing Characters
text2 = "Python"
first_char = text[0]  # first_char is 'P'
`,

        example2: 
`#str.upper() and str.lower()
text = "Hello, World!"
uppercase_text = text.upper()  # uppercase_text is "HELLO, WORLD!"
lowercase_text = text.lower()  # lowercase_text is "hello, world!"

# str.strip()
text = "  Hello, World!  "
stripped_text = text.strip()  # stripped_text is "Hello, World!"

#str.replace()
text = "Hello, Python!"
new_text = text.replace("Python", "World")  # new_text is "Hello, World!"`,

        example3: `# f-Strings
        name = "Alice"
        age = 30
        formatted_text_one  = f"My name is {name} and I am {age} years old."
        
        #str.format()
        name = "Bob"
        age = 25
        formatted_text_two = "My name is {} and I am {} years old.".format(name, age)
        
        #% Operator
        name = "Charlie"
        age = 40
        formatted_text_three = "My name is %s and I am %d years old." % (name, age)` ,

        practice1: 
        'Write a Python program to calculate and print the length of a user-entered string.',

        practice2: 'Write a Python program that takes a user-entered string, converts it to lowercase, and removes any leading or trailing spaces.',

        practice3: `Write a Python program that collects a user's name, age, and city. Use string formatting to create a personal introduction message and display it.`
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: `Prompt the user to input their first name and last name. Use string concatenation to create a full name and print it to the console.`,
        2: `Ask the user to enter a word, and then print the word in reverse order. For example, if the user inputs "Python," the program should print "nohtyP."`,
        3: `Request a sentence from the user and count the number of vowels (a, e, i, o, u) in the sentence. Print the count.`,
        4:`Create a basic calculator program that asks the user for two numbers and an operation (addition, subtraction, multiplication, or division). Perform the chosen operation and display the result.`,
        5: `Prompt the user to enter the radius of a circle. Calculate and print the area of the circle using the formula: Area = π * (radius^2). Use math.pi from the math library for the value of π.`
    }
}

export default Chapter1;
