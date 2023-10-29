import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

const Introduction = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <img className='bg-slate-600  p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    <NavLink to='/javascript/1.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </NavLink>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Introduction to JavaScript
                </h1>
                <p className='font-mono my-8'>
                    Welcome to the exciting world of JavaScript! JavaScript is a versatile programming language that plays a vital role in web development. In this chapter, we'll introduce you to JavaScript's history and its key features, setting the stage for your JavaScript journey.
                </p>

                <p className='font-mono my-8'>
                JavaScript: A Brief History
                JavaScript was born in the early days of the internet to add interactivity to web pages. It was created by Brendan Eich in just 10 days in 1995, making it one of the fastest-developed programming languages ever. JavaScript quickly became an essential tool for web developers worldwide.
                </p>

                <p className='font-mono my-8'>
                Why JavaScript?
                JavaScript is indispensable in modern web development for several reasons:
                Client-Side Interactivity: JavaScript enables you to create dynamic and interactive web applications that respond to user actions.
                Wide Adoption: It's supported by all major browsers, ensuring compatibility across platforms.
                Versatility: JavaScript isn't limited to the web; you can use it in various environments, including server-side development (Node.js) and even in mobile app development.
                Large Community: A vast community of developers and resources are available to help you learn and solve problems.
                </p>
                
            </div>
        </div>
    );
};

export default Introduction;

