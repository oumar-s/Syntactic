import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

const Strings = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/javascript/5.3'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/javascript/6.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Strings
                </h1>

                <p className='font-mono my-8'>
                    JavaScript's String data type is used to represent text. Strings are sequences of characters, such as letters, numbers, symbols, or whitespace, enclosed in single quotes (' '), double quotes (" "), or backticks (`). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. Here are some examples of strings in JavaScript:
                </p>
                
                <p className='font-mono my-8'>
                let str1 = 'Hello, World!'; // Using single quotes <br></br>
                let str2 = "JavaScript is fun."; // Using double quotes <br></br>
                let str3 = `This is a template literal string.`; // Using backticks
                </p>
            </div>
        </div>
    );
};

export default Strings;