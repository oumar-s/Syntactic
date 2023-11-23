import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonIntroduction = () => {
    return (
        <div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <img className='bg-slate-600  p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    <Link to='/python/1.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Introduction to Python
                </h1>
                <p className='font-mono my-8'>
                    Welcome to the dynamic realm of Python! Python is a versatile programming language that plays a crucial role in various domains, from web development to data science. In this chapter, we'll acquaint you with Python's historical background and its fundamental features, laying the foundation for your Python exploration.
                </p>

                <p className='font-mono my-8'>
                    Python: A Brief History
                    Python came into existence during the early days of computing, aiming to provide a versatile and easy-to-learn language. It was created by Guido van Rossum and released in 1991, gaining recognition for its rapid development and commitment to readability. Python swiftly became a staple tool for developers across various domains
                </p>

                <p className='font-mono my-8'>
                Why Python? <br></br>
                Python is a cornerstone in modern software development for several compelling reasons: <br></br>
                Versatile Scripting: Python allows you to craft dynamic, responsive software applications that adapt to user inputs. <br></br>
                Universal Compatibility: It boasts broad support across platforms, ensuring seamless operation on various systems. <br></br>
                Cross-Domain Utility: Python's applicability extends beyond traditional domains, with server-side programming (e.g., using frameworks like Django) and mobile app development using frameworks like Kivy. <br></br>
                Robust Community: Python boasts an extensive and supportive community of developers and a wealth of resources to assist you in learning and addressing challenges.
                </p>
                
            </div>
            <Chatbot />
        </div>
    );
};

export default PythonIntroduction;
