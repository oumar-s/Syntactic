import React, {useState} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-twilight'; 
import 'ace-builds/src-noconflict/theme-tomorrow_night'; 
import 'ace-builds/src-noconflict/theme-solarized_dark'; 
import 'ace-builds/src-noconflict/theme-one_dark'; 

import './Editor.css'

//Remember to put the header there (unsure how to implement it in the context of updated profile)
function Editor(){
    const [code, setCode] = useState('console.log("Hello, world!");');
    const [output, setOutput] = useState('This is your output');

    const handleCodeChange = (newCode) => {
        setCode(newCode); 
      };

      const runCode = () => {
        try {
          const result = eval(code); 
          setOutput(result);
        } catch (error) {
          setOutput(`Error: ${error}`);
        }
      };
    

    return(
        <div className='flex flex-wrap md:flex-nowrap p-4 font-ubuntu bg-midnight text-white'>
            <div className='w-1/2'>
                <p className='text-2xl md:text-4xl font-bold my-4'>Use an Array to Store a Collection of Data</p>
                <p className='font-mono my-2'>Below is an example of the simplest implementation of an array data
                structure. This is known as a one-dimensional array, meaning it only has one
                level, or that it does not have any other arrays nested within it. Notice it
                contains booleans, strings, and numbers, among other valid JavaScript data
                types:
                </p>
                <div>
                <AceEditor
                mode="javascript"
                theme="monokai"
                showPrintMargin={false}
                name="code-editor3"
                value="const readOnlyCode = 'This code is read-only';"
                editorProps={{ $blockScrolling: true }}
                readOnly={true}
                width="90%"
                height="300px"
            />
                </div>
                <p className='font-mono my-2'>The console.log call displays 7.
                All arrays have a length property, which as shown above, can be very easily
                accessed with the syntax Array.length. A more complex implementation of
                an array can be seen below. This is known as a multi-dimensional array, or
                an array that contains other arrays. Notice that this array also contains
                JavaScript objects, which we will examine very closely in our next section,
                but for now, all you need to know is that arrays are also capable of storing
                complex objects.
                </p>
                <div>
                <AceEditor
                mode="javascript"
                theme="monokai"
                showPrintMargin={false}
                name="code-editor2"
                value="const readOnlyCode = 'This code is read-only';"
                editorProps={{ $blockScrolling: true }}
                readOnly={true}
                width="90%"
                height="300px"
            />
                </div>
            </div>

           
           
            <div className='w-1/2'>
                <div className='user-input-div'>
                <AceEditor
                mode="javascript"
                theme="monokai"
                showPrintMargin={false}
                onChange={handleCodeChange} 
                name="code-editor"
                value={code}
                editorProps={{ $blockScrolling: true }}
                width="90%"
                height="500px"
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
                    <pre>{output}</pre>
                </div>
            </div>
        </div>
    );
}

export default Editor;