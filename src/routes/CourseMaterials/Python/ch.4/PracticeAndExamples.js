const Chapter1 = {
    topic1: {
        example1: 
`if condition:
        # Code to execute when the condition is True
`,
        practice1: 'Write a Python program that asks the user to enter an integer. Use an "if" statement to determine if the number is even or odd. Display an appropriate message.',

        example2: 
`age = 20
if age >= 18:
    print("You are an adult.")
`,
        practice2: 
`Create a Python program that prompts the user to enter a test score. Use an "if" statement to check if the score is equal to or greater than 70. If so, display "You passed!" Otherwise, display "You failed."`
    },
    topic2: {
        example1: 
`if condition:
        # Code to execute when the condition is True
else:
        # Code to execute when the condition is False
`,

        example2: 
`age = 15
if age >= 18:
    print("You are an adult.")
else:
    print("You are not yet an adult.")
`,

        practice1: 
`Write a Python program that asks the user to enter a number. Use an "if" statement to check if the number is positive or negative. If it's positive, display "The number is positive." If it's negative, display "The number is negative." If it's zero, display "The number is zero."`,

        practice2: 
`Create a Python program that prompts the user to enter three numbers. Use "if" and "else" statements to determine and display the maximum of the three numbers. Make sure to handle cases where two or more numbers have the same maximum value.`    
    },

    topic3: {
        example1: 
`if condition1:
        # Code to execute when condition1 is True
elif condition2:
        # Code to execute when condition2 is True
else:
        # Code to execute when all conditions are False
`,

        example2: 
`grade = 85
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("F")`,

        practice1: 
`Write a Python program that asks the user to enter a numerical grade between 0 and 100. Use an "if-elif-else" statement to assign a letter grade (A, B, C, D, or F) based on the following scale:
90-100: A
80-89: B
70-79: C
60-69: D
0-59: F Display the calculated letter grade.`,

practice2: 
`Create a Python program for a simple tax calculator. Ask the user to enter their annual income. Use an "if-elif-else" statement to calculate and display the income tax as follows:
If income is less than $50,000, tax is 10%.
If income is between $50,000 and $100,000, tax is 20%.
If income is greater than $100,000, tax is 30%.`
    },
    exam : {
        1: {
            practice: "Write a Python program that takes a single letter as input and determines if it's a vowel (a, e, i, o, u) or a consonant. Prompt the user to enter a letter and print the result.",
            topic: 'Else Statements in Python',
            id: 1
        },

        2: {
            practice: "Create a Python program that prompts the user to enter a number from 1 to 7, where 1 represents Sunday, 2 represents Monday, and so on. The program should then print the corresponding day of the week.",
            topic: 'Elif Statements in Python',
            id: 2
        },

        3: {
            practice: `Write a Python program that calculates the shipping cost for an online store based on the weight of a package and the distance it needs to be shipped. Prompt the user to enter the weight (in kilograms) and the distance (in kilometers) and then calculate and display the shipping cost using the following rules: Weight < 2 kg: $5 per kilometer, 2 kg ≤ Weight < 10 kg: $10 per kilometer, Weight ≥ 10 kg: $20 per kilometer`,
            topic: 'Elif Statements in Python',
            id: 3
        },

        4: {
            practice: `Create a Python program that checks the strength of a password entered by the user. The program should evaluate the password based on the following criteria and provide feedback: At least 8 characters long, Contains at least one uppercase letter, Contains at least one lowercase letter, Contains at least one digit, Contains at least one special character (e.g., !, @, #)`,
            topic: 'If Statements in Python',
            id: 4   
        },

        5: {
            practice: "Write a Python program that allows the user to play a simple game of Rock, Paper, Scissors against the computer. The computer randomly selects one of the three options, and the user inputs their choice. Determine the winner and display the result.",
            topic: 'Elif Statements in Python',
            id: 5
        }
    }
}

export default Chapter1;
