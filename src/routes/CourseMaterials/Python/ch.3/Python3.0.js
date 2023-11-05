import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

const PythonDataTypeOperations = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/python/2.4'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/python/3.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Python Data Operations
                </h1>
                <p className='font-mono my-8'>
                    In Python, working with data types is an integral part of programming. The language offers a variety of operations to manipulate and interact with different data types, including integers, floating-point numbers, strings, and more. These operations allow developers to perform tasks such as mathematical calculations, text processing, and data transformation. Whether you need to add two numbers, concatenate strings, convert data from one type to another, or perform advanced operations, Python provides a comprehensive set of tools to make data type operations seamless and efficient. Understanding how to leverage these operations is essential for building robust and dynamic applications in Python.
                </p>

                <p className='font-mono my-8'>
                This chapter will cover Integer, Float, and String operations.
                </p>
            </div>
        </div>
    );
};

export default PythonDataTypeOperations;
