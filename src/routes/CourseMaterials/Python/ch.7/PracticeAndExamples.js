const Chapter1 = {
    topic1: {
        example1: 
`def greet(name):
    print(f"Hello, {name}!")`,
        practice1: 'Create a function greet_all that takes a list of names and greets each name by calling the greet function. For example, greet_all(["Alice", "Bob"]) should print greetings for both Alice and Bob.',

        example2: 
`def greet(name):
    print(f"Hello, {name}!")

greet("Alice")`,

        practice2: `Write a function is_even that takes an integer as an argument and returns True if the number is even and False if it's odd.`,
        
        example3: 
`def square(x):
    return x ** 2`,

        practice3: `Create a function calculate_area that computes and returns the area of a rectangle. It should take the width and height as parameters.`
    },
    topic2: {
        example1: 
`def double(x):
    result = x * 2
    return result
`,
        example2: 
`def greet(name="Guest"):
    print(f"Hello, {name}!")`,

        practice1: 
        'Create a function compute_average that computes and returns the average of a list of numbers. The function should define the sum and count of numbers within the function.',

        practice2: 'Write a function create_greeting that generates a personalized greeting. It should take a name as a parameter and have a default message for cases where the name is not provided.',

        practice3: `Create a function calculate_power that raises a number to a specified power. The power should have a default value of 2.`
    },

    topic3: {
        example1: 
`def add_all(*args):
    total = sum(args)
    return total`,

        example2: 
`square = lambda x: x ** 2`,

        practice1: 
        'Write a function find_max that takes a variable number of integers as arguments and returns the maximum value among them.',

        practice2: 'Write a lambda function to find the square of a number.',

        practice3: 'Create a lambda function to check if a given number is even.'
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: "Write a function that takes three numbers as input and returns the maximum of the three.",
        2: "Write a function that takes any number of string arguments and concatenates them to create a single string. The function should accept a variable number of input strings and return the concatenated result.",
        3: "Write a function that takes a list of numbers as input and uses a lambda function to filter and return a new list containing only the even numbers.",
        4: "Create a function that takes the coefficients of a quadratic equation (a, b, and c) as input and returns the roots of the equation. Use the quadratic formula to calculate the roots.",
        5: "Write a function that generates the first n numbers of the Fibonacci sequence using a lambda function and returns them as a list."
    }
}

export default Chapter1;
