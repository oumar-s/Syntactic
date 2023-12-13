import React, { useState } from 'react';
import Editor from '@monaco-editor/react';


 
    
    

const JavaScript1 = () => {
    const [code, setCode] = useState('console.log("Hello, world!");');
    const [output, setOutput] = useState('This is your output');
    const [response, setResponse] = useState('');
    
    //Exmples
    const ExmpleCode1 = `// Define the numbers. 
    const number1 = 5; 
    const number2 = 10; 
    
    // Use an 'if' statement to check if number1 is greater than number2. 
    if (number1 > number2) { 
    console.log("Number1 is greater than Number2."); 
    } else { 
    console.log("Number1 is not greater than Number2."); 
    }`
    const practice = `Write an if statement to check if a number is even or odd. Declare a variable called number and assign it any integer value. Write an if statement that checks whether the number is even or odd. Use console.log() to display a message indicating whether the number is even or odd.`
    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
        setOutput(value)
    }
    const handleSubmit = async () => {
         
       
        // const response = await openai.chat.completions.create({
        //         messages: [{ role: "assistant", content: `Based on bellow code and practice problem, return a json object with the following properties: {evaluation: "Correct" or "Incorrect", Feedback: "a uselful feedback based on code quality and clean code"}: code is ${code}, practice problem is ${practice}` }],
        //         model: "gpt-3.5-turbo",
        //         max_tokens: 100});
            
        // setResponse(response.choices[0].message.content);
      };


    // Define editor options, including 'readOnly'
    const editorOptions = {
        readOnly: true, // Set the editor to read-only
        //automaticLayout: true, // Adjust the layout automatically
        minimap: {
            enabled: false,
        }
    };



    return (
        <div className='flex flex-wrap md:flex-nowrap p-4 font-ubuntu bg-midnight text-white'>
            <div className='w-1/2 h-screen overflow-auto'>
                <h1 className='text-2xl md:text-4xl font-bold my-4'>        
                    Introduction to Conditional Statements
                </h1>
                <p className='font-mono my-2'>
                    Conditional statements form the core of logic in programming. In this topic, we'll introduce you to the fundamental concept of conditional statements, focusing on two essential constructs: if statements and else statements. By the end of this topic, you'll understand how to use these statements effectively in your JavaScript programs.
                </p>

                <p className='font-mono my-2'>
                    Conditional statements are like the traffic signals of your program, guiding the flow of execution based on certain conditions. We'll cover:
                    if Statements: Learn how to use if statements to execute a block of code if a specified condition is true.
                    else Statements: Explore else statements, which allow you to provide an alternative code block to execute if the condition in the if statement is false.
                </p>

                <p className='font-mono my-2'>
                    To grasp these concepts, let's dive into some hands-on practice:

                    Simple number comparison. In this example we're comparing two numbers using conditional statements.

                </p>

                <div className="editor-container">
                    <Editor
                        height="200px"
                        language="javascript"
                        theme="vs-dark"
                        value={ExmpleCode1}
                        options={editorOptions} // Apply editor options
                    />
                </div>

                <div>
                    <h2>Practice 1 </h2>
                    <p className='font-mono my-2'>
                        Write an if statement to check if a number is even or odd. Declare a variable called number and assign it any integer value. Write an if statement that checks whether the number is even or odd. Use console.log() to display a message indicating whether the number is even or odd.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit}>
                        Submit
                    </button>

                </div>
                <div>
                    <h2>Practice 2 </h2>
                    <p className='font-mono my-2'>
                    Now, let's apply conditional statements to create a basic login system. Declare a variable called isLoggedIn and set it to true or false to represent a user's login status. Write an if-else statement to check whether the user is logged in or not. Display different messages depending on the user's login status.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold w-20 h-10 flex items-center justify-center">
                        Submit
                    </button>

                </div>
                <div>
                    <h2>Practice 3 </h2>
                    <p className='font-mono my-2'>
                    In this practice, you'll simulate an online store's discount system. Create variables to represent a user's total purchase amount and their membership status (you can use a boolean value to represent membership). Write conditional statements to determine the discount percentage based on the purchase amount and membership status. Calculate and display the final amount after applying the discount.

                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold w-20 h-10 flex items-center justify-center">
                        Submit
                    </button>

                </div>

                <div className="editor-container">
                    <h2>Read-Only Editor 1</h2>
                    <Editor
                        height="100px"
                        language="javascript"
                        theme="vs-dark"
                        value={code}
                        options={editorOptions} // Apply editor options
                    />
                </div>
                


            </div>



            <div className='w-1/2'>
                <div className="editor-container">
                    <Editor
                        height="60vh"
                        language="javascript"
                        theme="vs-dark"
                        defaultValue="// some comment"
                        onChange={handleEditorChange}
                    />
                </div>



                <div className='buttons-and-info-div flex space-x-2'>
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold w-20 h-10 flex items-center justify-center">
                        Run
                    </button>

                    <button className="bg-gray-400 hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center">
                        Submit
                    </button>

                    <img>

                    </img>
                </div>

                <div className='bg-black h-96'>
                    <pre>{response}</pre>
                </div>
                
            </div>
        </div>
    );
};

export default JavaScript1;

// import React, { useState, useEffect } from "react";
// 


// const App = () => {
//   const [poem, setPoem] = useState("");
  

//   const generatePoem = async () => {
//      
//         
//         dangerouslyAllowBrowser: true
//     });

//     const response = await openai.completions.create({
//         model: "gpt-3.5-turbo-instruct",
//         prompt: "Write a poem about a cat.",
//         max_tokens: 7,
//         temperature: 0,
//     });

//     setPoem(response.choices[0].text);
//   };

//   return (
//     <div>
//       <h1>Generate a Poem</h1>
//       <button onClick={generatePoem}>Generate</button>
//       <p>{poem}</p>
//     </div>
//   );
// };

// export default App;