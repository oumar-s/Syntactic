const Chapter1 = {
    topic1: {
        example1: 
`fruits = ["apple", "banana", "cherry"]`,
        practice1: 'Write a Python program that calculates and prints the sum of all numbers in a given list of integers.',
        practice2: `Create a Python program that takes two lists and concatenates them into a single list.`,
        practice3: `Design a Python program that asks the user to enter an element and checks if it exists in a predefined list. Display an appropriate message.`
    },
    topic2: {
        example1: 
`fruits = ["apple", "banana", "cherry"]
first_fruit = fruits[0]  # Access the first element`,
        practice1: 
        'Write a Python program that finds and prints the maximum element in a list of numbers.',

        practice2: 'Create a Python program that uses list slicing to extract a sub-list from a given list. Prompt the user to enter the start and end indices for slicing.',

        practice3: `Design a Python program that iterates through a list of names and prints each name in uppercase.`
    },

    topic3: {
        example1: 
` #fruits = ["apple", "banana", "cherry"]
fruits[1] = "kiwi"  # Modify the second element`,

        example2: 
`fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # Add an element to the end
fruits.remove("banana")  # Remove an element
"kiwi" in fruits  # Check if an element exists`,

example3: `fruits = ["apple", "banana", "cherry"]
sorted_fruits = sorted(fruits)  # Sort the list
count = len(fruits)  # Get the length
copy = fruits.copy()  # Create a copy`,

        practice1: 
        'Write a Python program that reverses the order of elements in a list.',

        practice2: 'Create a Python program that filters out even numbers from a list and creates a new list containing only the odd numbers.',

        practice3: 'Design a Python program that takes a list of names and sorts them in alphabetical order. Display the sorted list.'
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: "Write a function that takes a 2D matrix (list of lists) as input and returns a transposed version of the matrix, where rows become columns and vice versa.",
        2: "Create a function that rotates a list to the right by a specified number of positions. For example, rotating [1, 2, 3, 4, 5] by 2 positions would result in [4, 5, 1, 2, 3].",
        3: "Given a list of strings, write a function that extracts strings with a specified length and returns a new list with those strings.",
        4: "Given a list of numbers, create a new list that contains only the even numbers from the original list using list comprehension.",
        5: "Write a function to check if a given list is a palindrome, meaning it reads the same forwards and backwards. For example, [1, 2, 3, 2, 1] is a palindrome."
    }
}

export default Chapter1;
