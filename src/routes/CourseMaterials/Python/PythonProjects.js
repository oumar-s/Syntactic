import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../assets/icons/angle-right.png';
import Chatbot from '../../../components/Chatbot/Chatbot';

const PythonProjects = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/python/8.4'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Word Counter
                </h1>
                <p className='font-mono my-8'>
                    Create a program that counts the number of words and characters in a given text input.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Calculator
                </h1>
                <p className='font-mono my-8'>
                    Build a basic command-line calculator that can perform arithmetic operations like addition, subtraction, multiplication, and division.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Guess the Number
                </h1>
                <p className='font-mono my-8'>
                    Implement a number guessing game in the console, where the program generates a random number, and the user tries to guess it within a certain number of attempts.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Palindrome Checker
                </h1>
                <p className='font-mono my-8'>
                    Write a program that checks if a given word or phrase is a palindrome (reads the same forwards and backward).
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Morse Code Translator
                </h1>
                <p className='font-mono my-8'>
                    Create a program that can translate text to Morse code and vice versa.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Simple File Reader/Writer
                </h1>
                <p className='font-mono my-8'>
                    Build a program that can read data from a file and write data to a file. You can use this for simple data storage and retrieval.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Dice Rolling Simulator
                </h1>
                <p className='font-mono my-8'>
                    Develop a program that simulates the rolling of dice, allowing users to roll a specified number of dice and display the results.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Hangman Game
                </h1>
                <p className='font-mono my-8'>
                    Implement the classic game of Hangman in the console, where the player guesses letters to uncover a hidden word.
                </p>
                <h1 className='text-xl md:text-2xl font-bold my-4 bg-slate-700 p-4'>        
                    Simple Quiz Game
                </h1>
                <p className='font-mono my-8'>
                    Create a multiple-choice quiz program where the user can answer questions and receive a score at the end.
                </p>
                
            </div>
            <Chatbot />
        </div>
    );
};

export default PythonProjects;

