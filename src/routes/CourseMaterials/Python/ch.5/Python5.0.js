import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonLoops = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/python/4.4'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/python/5.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Python Loops
                </h1>
                <p className='font-mono my-8'>
                    Loops are a fundamental concept in programming that allow you to repeat a set of instructions multiple times. Python provides two main types of loops: "for" loops and "while" loops. This guide covers the essentials of loops in Python.
                </p>

            </div>
            <Chatbot />
        </div>
    );
};

export default PythonLoops;
