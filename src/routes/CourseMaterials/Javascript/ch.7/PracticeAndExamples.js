const Chapter1 = {
    topic1: {
        example1: 
`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
// Accessing values using dot notation
console.log(person.firstName); // Output: "John"
  
// Accessing values using bracket notation
console.log(person["age"]); // Output: 30`,
        practice1: `Create an object called \`car\` with properties like \`make\`, \`model\`, and \`year\`. Access and log the \`model\` of the car using both dot and bracket notation.`,
        practice2: `Define an object called \`student\` with properties for \`name\`, \`age\`, and \`grade\`. Access and print the \`age\` of the student using both dot and bracket notation.`,
        practice3: `Create an object \`book\` with properties \`title\`, \`author\`, and \`yearPublished\`. Access and display the \`title\` using dot notation.`
    },
    topic2: {
        example1: 
`const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
// Setting a new property
person.age = 30;
  
// Modifying an existing property
person.firstName = "Jane";
  
console.log(person);`,

        practice1: 
        'Create an empty object called `user`. Set the `name` property to "Alice" and the `email` property to "alice@example.com".',

        practice2: 'Define an object `product` with a `name` property set to "Laptop" and a `price` property set to 899.99. Update the `price` to 799.99.',

        practice3: 'Create an object `animal` with a `species` property set to "Lion." Add a new property `habitat` and set it to "Savannah."'
    },

    topic3:{
    example1:
`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
      
const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age"]`,
practice1: 
'Create an object called `fruit` with properties `name`, `color`, and `taste`. Use `Object.keys()` to get an array of the property names.',

practice2: 'Define an object `city` with properties `name`, `population`, and `country`. Use `Object.keys()` to retrieve an array of the property names.',

practice3: 'Create an object `book` with properties `title`, `author`, and `genre`. Get an array of the property names using `Object.keys()`.'
    },

    topic4:{
example1:
`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", 30]`,
practice1: 
'Create an object called `drink` with properties `name`, `type`, and `calories`. Use `Object.values()` to get an array of the property values.',

practice2: 'Define an object `country` with properties `name`, `population`, and `language`. Use `Object.values()` to retrieve an array of the property values.',

practice3: 'Create an object `movie` with properties `title`, `director`, and `year`. Get an array of the property values using `Object.values()`.'
    },

    topic5:{
        example1:
`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
  
Object.keys(person).forEach(key => {
    console.log(key + ": " + person[key]);
});
// Output:
// firstName: John
// lastName: Doe
// age: 30`,
practice1: 
'Create an object called `fruit` with properties `name`, `color`, and `taste`. Use `.forEach()` to print each property and its value.',

practice2: 'Define an object `city` with properties `name`, `population`, and `country`. Use `.forEach()` to display each property and its value.',

practice3: 'Create an object `book` with properties `title`, `author`, and `genre`. Use `.forEach()` to output each property and its value.'

    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: 'You have an object `book` with properties `title`, `author`, and `year`. Use the `Object.keys()` method to loop through the keys and log each key along with its corresponding value.',
            topic: 'Object Method .keys()',
            id: 1
        },

        2: {
            practice: 'Create an empty object called `car`. Set the `make` property to "Toyota" and the `model` property to "Camry." Display the `car` object.',
            topic: 'Accessing a Value in an Object',
            id: 2
        },

        3: {
            practice: 'You have an object `student` representing a student with properties `name`, `age`, and `grade`. Use the `Object.keys()` method to list all the property names (keys) of the student.',
            topic: 'Object Method .keys()',
            id: 3
        },

        4: {
            practice: 'Given an object `person` with properties `name`, `age`, and `city`, access and display the `age` of the person',
            topic: 'Accessing a Value in an Object',
            id: 4   
        },

        5: {
            practice: 'Create an object `fruit` with properties `name`, `color`, and `taste`. Use the `Object.values()` method to retrieve and display all the property values of the `fruit` object.',
            topic: 'Object Method .values()',
            id: 5
        }
    }
}

export default Chapter1;