import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const Arrays = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/javascript/4.2'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/javascript/5.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Arrays
                </h1>

                <p className='font-mono my-8'>
                    In this chapter, we'll explore JavaScript arrays, versatile data structures that allow you to store and manage collections of values. Arrays are fundamental to many programming tasks, and mastering them is key to becoming a proficient JavaScript programmer.
                </p>
                
            </div>
            <Chatbot />
        </div>
    );
};

export default Arrays;