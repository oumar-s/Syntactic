import React from 'react';
import ProjectDropdown from './ProjectComponent/ProjectDropdown';
import './Projects.css'

function Projects(){
    const [project1, title1] = ['Create a program that counts the number of words and characters in a given text input.', 'Word Counter'];
    const [project2, title2] = ['Build a basic command-line calculator that can perform arithmetic operations like addition, subtraction, multiplication, and division.', 'Calculator'];
    const [project3, title3] = ['Create a console-based to-do list application where you can add, remove, and mark tasks as completed.', 'To-Do List'];
    const [project4, title4] = ['Implement a number guessing game in the console, where the program generates a random number, and the user tries to guess it within a certain number of attempts.', 'Guess the Number'];
    const [project5, title5] = ['Write a program that checks if a given word or phrase is a palindrome (reads the same forwards and backward).', 'Palindrome Checker'];
    const [project6, title6] = ['Create a program that can translate text to Morse code and vice versa.', 'Morse Code Translator'];
    const [project7, title7] = ['Build a program that can read data from a file and write data to a file. You can use this for simple data storage and retrieval.', 'Simple File Reader/Writer'];
    const [project8, title8] = ['Develop a program that simulates the rolling of dice, allowing users to roll a specified number of dice and display the results.', 'Dice Rolling Simulator'];
    const [project9, title9] = ['Implement the classic game of Hangman in the console, where the player guesses letters to uncover a hidden word.', 'Hangman Game'];
    const [project10, title10] = ['Create a multiple-choice quiz program where the user can answer questions and receive a score at the end.', 'Simple Quiz Game'];
    return(
        <div className='font-ubuntu flex flex-col items-center bg-gallery'>
            <div className='text-midnight text-lg font-mono font-normal text-5xl mb-2'>
                <h1>Projects</h1>
            </div>
            <div className='w-full flex flex-col items-center'>
                <ProjectDropdown content={project1} projectTitle={title1}/>
                <ProjectDropdown content={project2} projectTitle={title2}/>
                <ProjectDropdown content={project3} projectTitle={title3}/>
                <ProjectDropdown content={project4} projectTitle={title4}/>
                <ProjectDropdown content={project5} projectTitle={title5}/>
                <ProjectDropdown content={project6} projectTitle={title6}/>
                <ProjectDropdown content={project7} projectTitle={title7}/>
                <ProjectDropdown content={project8} projectTitle={title8}/>
                <ProjectDropdown content={project9} projectTitle={title9}/>
                <ProjectDropdown content={project10} projectTitle={title10}/>
            </div>
        </div>
    );
}

export default Projects;