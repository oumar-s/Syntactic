const Chapter1 = {
    topic1: {
        example1: 
`for item in sequence:
        # Code to execute for each item
`,
        practice1: 'Write a Python program that iterates through a list of animals and prints each animal using a "for" loop.',

        example2: 
`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
`,
        practice2: 
`Create a Python program that uses a "for" loop to print numbers from 1 to 10.`,
        
        example3: 
`for number in range(5):
        print(number)`,
        practice3: 
`Write a Python program that uses a "for" loop to print numbers from 1 to 5 but stops when it encounters the number 3 using the "break" statement.`,
        example4: 
`for number in range(10):
if number == 5:
    print("Encountered 5 - breaking out of the loop")
    break
elif number == 3:
    print("Encountered 3 - skipping this iteration")
    continue
print(number)
`
    },
    topic2: {
        example1: 
`while condition:
        # Code to execute as long as the condition is True`,

        example2: 
`count = 0
while count < 5:
    print(count)
    count += 1
`,
        example3:
`count = 0
while count < 5:
    if count == 3:
        print("Encountered 3 - breaking out of the loop")
        break
    elif count == 1:
        print("Encountered 1 - skipping this iteration")
        count += 1
        continue
    print(count)
    count += 1
else:
    print("Loop completed without encountering a 'break'.")`,
    
        practice1: 
        'Create a Python program that generates a random number and asks the user to guess it. Use a "while" loop to continue prompting the user until they guess correctly.',

        practice2: 'Write a Python program that calculates the factorial of a number entered by the user using a "while" loop.',

        practice3: `Design a Python program that asks the user to enter a password. Use a "while" loop to keep asking until the user enters the correct password.`
    },
    exam : {
        1: {
            practice: `Write a "for" loop that calculates the sum of all even numbers from 1 to 50.`,
            topic: 'For Loops in Python',
            id: 1
        },

        2: {
            practice: `Create a "while" loop that counts down from 10 to 1, displaying each number in the countdown. Once it reaches 1, print "Blast-off!"`,
            topic: 'While Loops in Python',
            id: 2
        },

        3: {
            practice: `Write a "for" loop that prints the multiplication table for a given number. Prompt the user to enter a number, and then display the multiplication table for that number from 1 to 10.`,
            topic: 'For Loops in Python',
            id: 3
        },

        4: {
            practice: `Implement a program that asks the user to enter a password. Use a "while" loop to give the user three chances to enter the correct password. If they succeed, print "Access granted," otherwise, print "Access denied" after three failed attempts.`,
            topic: 'While Loops in Python',
            id: 4   
        },

        5: {
            practice: `Write a "for" loop that calculates the factorial of a number. Prompt the user to enter a positive integer and then use a "for" loop to calculate and print the factorial of that number.`,
            topic: 'For Loops in Python',
            id: 5
        }
    }
}

export default Chapter1;
