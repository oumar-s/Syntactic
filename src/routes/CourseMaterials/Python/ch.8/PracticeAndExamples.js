const Chapter1 = {
    topic1: {
        example1: 
`class Person:
    pass`,
        practice1: `Design a class called Employee to represent information about an employee, including attributes such as employee ID, name, job title, and salary.`,

        example2: 
`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age`,

        practice2: `Create a class called Animal to represent general information about animals, including attributes like species, habitat, and average lifespan.`,
        
        example3: 
`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
person1 = Person("Alice", 30)
`,

        practice3: `Implement a class called Vehicle to store details about vehicles, including attributes such as make, model, year, and fuel type.`
    },
    topic2: {
        example1: 
`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, I'm {self.name} and I'm {self.age} years old.")`,
        example2: 
`class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
`,

        practice1: `Implement a class Employee with attributes name, employee_id, and salary. Add a method to increase the salary and display employee information. Create an instance and test the methods.`,

        practice2: `Create a subclass Manager that inherits from the Employee class and has an additional attribute team_size. Implement a method to display manager information along with the team size. Instantiate a Manager object and call the method.`,

        practice3: `Define a class Shape with methods to calculate the area and perimeter. Create subclasses Rectangle and Circle that inherit from Shape and calculate their respective areas and perimeters. Test these subclasses with different dimensions.`
    },

    topic3: {
        example1: 
`class Circle:
    def __init__(self, radius):
        self.__radius = radius

    def get_area(self):
        return 3.14159 * self.__radius ** 2
`,

        example2: 
`class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")`,

        practice1: 
        'Implement a class Book with private attributes __title and __author. Add methods to get and set these attributes. Test the getter and setter methods with different book details.',

        practice2: 'Create a class BankAccount with private attributes __balance and __account_number. Implement methods for depositing and withdrawing money from the account, ensuring that the balance is properly encapsulated. Test these methods with various transactions.',

        practice3: 'Define a class Product with attributes name, price, and quantity. Implement a method to calculate the total cost of a certain quantity of the product. Create an instance and test the method with different product details.'
    },

    exam : {
        1: {
            practice: "Design a class called School to model a school system. Create subclasses for Student and Teacher, each with their specific attributes and methods. The School class should have methods to enroll students, hire teachers, and check student and teacher information.",
            topic: 'Class Methods and Inheritance',
            id: 1
        },

        2: {
            practice: "Create a class called PetAdoptionCenter to represent a pet adoption center. Implement subclasses for different types of animals (e.g., cats, dogs, rabbits) with specific attributes for each animal type. The PetAdoptionCenter class should have methods for adding animals to the center and checking the available animal categories.",
            topic: 'Encapsulation and Practical Applications',
            id: 2
        },

        3: {
            practice: "Create a class called Menu to represent a restaurant's menu. Include methods for adding and removing menu items, displaying the menu, and checking the availability of specific items.",
            topic: 'Class Methods and Inheritance',
            id: 3
        },

        4: {
            practice: "Design a class called Library that models a library catalog. Implement methods for adding, removing, and searching for books in the library's collection.",
            topic: 'Class Methods and Inheritance',
            id: 4   
        },

        5: {
            practice: "Create a class called UserProfile to represent a user's profile on a social media platform. Include attributes such as username, full name, and bio.",
            topic: 'Basics of Classes and Object Creation in Python',
            id: 5
        }
    }
}

export default Chapter1;
