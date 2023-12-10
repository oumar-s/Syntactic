const Chapter1 = {
    topic1: {
        example1: 
`const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve("Data fetched successfully");
      } else {
        reject("Error: Unable to fetch data");
      }
    }, 1000);
  });
};

fetchData()
  .then((result) => {
    console.log(result); // Output: "Data fetched successfully"
  })
  .catch((error) => {
    console.error(error); // Output: "Error: Unable to fetch data"
  });`,
        practice1: 'Write a Promise that resolves after a random delay (between 1 and 5 seconds) with the message "Promise resolved."',
        practice2: 'Create a Promise that rejects with the error message "Promise rejected due to an error" after a random delay (between 1 and 5 seconds).',
        practice3: 'Build a function that accepts a number and returns a Promise that resolves with the square of the number. Use it to calculate the square of 5 and handle the result using `then`.'
    },
    topic2: {
        example1: 
`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();`,

        practice1: 
        'Create an `async` function that simulates fetching user data with a delay of 2 seconds and returns a user object with a name. Call the function and log the user\'s name using `await`.',

        practice2: 'Implement an `async` function that calculates the sum of two numbers with a delay of 1 second and returns the result. Call the function with different numbers and log the sum.',

        practice3: 'Build an `async` function that fetches data from an API with a delay of 3 seconds and returns the fetched data. Log the data when calling the function.'
    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: 'Write a function `delayedResponse` that returns a Promise. This Promise should resolve with the message "Response received" after a random delay between 1 and 4 seconds. Then, use `.then` to log the resolved message.',
            topic: 'Then and Catch',
            id: 1
        },

        2: {
            practice: 'Create a function `divideNumbers` that takes two numbers as parameters and returns a Promise. The Promise should resolve with the result of dividing the first number by the second number if the second number is not zero. If the second number is zero, it should reject with an error message. Use `.catch` to handle any errors and log the error message.',
            topic: 'Then and Catch',
            id: 2
        },

        3: {
            practice: 'Implement an `async` function `fetchUserData` that simulates fetching user data from an API with a delay of 2 seconds and returns a user object with a name. Use `await` to wait for the data and log the user\'s name.',
            topic: 'Async and Await',
            id: 3
        },

        4: {
            practice: 'Create an `async` function `calculateSum` that calculates the sum of two numbers with a delay of 1 second and returns the result. Use `await` to calculate the sum and log the result.',
            topic: 'Async and Await',
            id: 4   
        },

        5: {
            practice: 'Write a function `fetchAndProcessData` that uses `async/await` to fetch data from an API with a delay of 3 seconds and returns the data. Then, use `.then` to process the data by converting it to uppercase and log the result.',
            topic: 'Async and Await',
            id: 5
        }
    }
}

export default Chapter1;