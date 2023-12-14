import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Chatbot from '../../components/Chatbot/Chatbot';

const Playground = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    // Handle code changes in the editor
    function handleEditorChange(value) {
        // console.log('here is the current model value:', value);
        setCode(value);
    }

    // Run code using OpenAI
    const handleRun = async () => {
        setOutput('Loading...');
        try {
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleExplain = async () => {
        setOutput('Loading...');
        try {
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/explain', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            const explanation = result;
            setOutput(explanation);
            console.log(result);
            
          } catch (error) {
              console.error('Error:', error.message);
          }

    };

    return (
        <div className='font-ubuntu bg-midnight text-white pt-1'>
            <h1 className='text-xl md:text-2xl font-bold bg-slate-700 p-4'>
                Code Playground
            </h1>
            <p className='font-mono my-8 p-2'>
                Playground is where you code on your own in any language or library. Practice what you're learning or build something new.
                You can run your code and see the output. You can also ask the AI to explain your code to you.
            </p>
            <div className='flex flex-wrap md:flex-nowrap flex-row  font-ubuntu bg-midnight text-white'>
                <div className='w-1/2'>
                    <div className='editor-container'>
                        <Editor
                            height='65vh'
                            language='javascript'
                            theme='vs-dark'
                            onChange={handleEditorChange}
                        />
                    </div>

                    <div className='buttons-and-info-div flex space-x-2 justify-center bg-slate-900 '>
                        <button
                            className=' hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center'
                            onClick={handleRun}
                        >
                            Run
                        </button>

                        <button
                            className=' hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center'
                            onClick={handleExplain}
                        >
                            Explain
                        </button>
                    </div>
                </div>
                <div className='w-1/2'>

                    <div className='bg-black p-2 h-full'>
                        <pre className='whitespace-pre-line'>{output}</pre>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
};

export default Playground;
