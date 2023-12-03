const Chapter1 = {
    topic1: {
        example1: 
`class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}
`,
        practice1: 'Create a class called `Person` with properties `name` and `age`. Add a method `introduce()` that prints the person\'s name and age.',
        practice2: 'Define a class `Car` with properties `make`, `model`, and `year`. Add a method `startEngine()` that logs "Engine started!".',
        practice3: 'Create a class `Book` with properties `title` and `author`. Add a method `displayInfo()` to display the book\'s title and author.'
    },
    topic2: {
        example1: 
`class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}`,

        practice1: 
        'Create a class called Animal with a constructor that takes name and species as parameters. Initialize properties with these values.',

        practice2: 'Define a class Product with a constructor that accepts name, price, and quantity. Initialize the object with these values.',

        practice3: 'Create a class Rectangle with a constructor that sets width and height. Initialize these properties in the constructor.'
    },

    topic3:{
    example1:
`class Rectangle {
  width = 0;
  height = 0;
}
const rect = new Rectangle();
rect.width = 10;
rect.height = 5;`,
practice1: 'Create a class `Circle` with a public field `radius`. Create an instance of `Circle` and set its `radius` property to a value.',

practice2: 'Define a class `Student` with a public field `name`. Create a `Student` object and assign a name to it.',

practice3: 'Create a class Car with a public field color. Create a Car object and set its color property'
    },

    topic4:{
example1:
`class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }
}
const counter = new Counter();
counter.increment(); // Works
console.log(counter.#count); // Error - Private field access`,
practice1: 
'Create a class `BankAccount` with a private field `balance`. Add a method `deposit(amount)` to increase the balance.',

practice2: 'Define a class `Person` with a private field `ssn` (social security number). Implement a method `getSSN()` to access the `ssn` field.',

practice3: 'Create a class Book with a private field isbn (International Standard Book Number). Implement a method getISBN() to retrieve the isbn.'
    },

    topic5:{
        example1:
`class Circle {
  #radius = 0;

  get diameter() {
    return this.#radius * 2;
  }
}
const circle = new Circle();
circle.diameter; // Retrieves the diameter via the getter method`,
practice1: 
'Create a class Circle with a private field radius. Implement a getter method getDiameter() that returns the diameter.',

practice2: 'Define a class Student with a private field grade. Implement a getter method getGrade() to access the grade field.',

practice3: 'Define a class Car with a private field speed. Implement a getter method getSpeed() to access the speed field.'

    },

    topic6:{
        example1:
`class Rectangle {
  #width = 0;

  set width(value) {
    if (value > 0) {
      this.#width = value;
    }
  }
}
const rect = new Rectangle();
rect.width = 10; // Sets the width via the setter method`,
practice1: 
'Create a class Rectangle with a private field width. Implement a setter method setWidth(newWidth) to set the width.',

practice2: 'Define a class Person with a private field email. Implement a setter method setEmail(newEmail) to update the email.',

practice3: 'Create a class `BankAccount` with a private field `balance`. Implement a setter method setBalance(newBalance) to update the balance.'

    },

    //probles are in random order for the sake of Interleaving
    exam : {
        1: {
            practice: 'Create a class called Person with a constructor that takes name and age as parameters. Initialize these properties. Then, create an instance of Person and log the person\'s name and age.',
            topic: 'Class Constructor',
            id: 1
        },

        2: {
            practice: 'Create a class Circle with a public field radius. Create an instance of Circle and set its radius field to a value. Then, calculate and log the radius.',
            topic: 'Public Fields',
            id: 2
        },

        3: {
            practice: 'Create a class Temperature with a private field celsiusTemperature. Implement a getter method getTemperature() that returns the temperature Create an instance of Temperature, set its celsiusTemperature, and then retrieve and log the temperature.',
            topic: 'Getter',
            id: 3
        },

        4: {
            practice: 'Create a class BankAccount with private fields accountNumber and balance. Implement a constructor to initialize these fields, and add a method getAccountInfo() that returns the account number and balance. Create an instance of BankAccount, set its properties, and retrieve and log the account information.',
            topic: 'Private Fields',
            id: 4   
        },

        5: {
            practice: 'Create a class Person with private fields firstName and lastName. Implement setter methods setFirstName() and setLastName() to modify these fields. Create an instance of Person, set its first and last names, and then log the full name.',
            topic: 'Setter',
            id: 5
        }
    }
}

export default Chapter1;