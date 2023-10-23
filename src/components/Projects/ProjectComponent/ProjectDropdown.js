import React, { useState } from 'react';

function ProjectDropdown( {content, projectTitle}){
    const[isDropped, setDropped] = useState(false);
    
    const changeDropState = () => {
        setDropped(!isDropped);
    }

    let projectContent = null;
    let projectInstructions = null; 

    if (isDropped){
        projectInstructions = 'Project Instructions: '
        projectContent = (
            <ul>
                <li>{content}</li>
            </ul>
        );
    }

    return(
        <div className='mb-2'>
            <button onClick={changeDropState} className='bg-midnight hover:bg-midnight-600 text-white font-bold w-96 h-20 p-3' >
                {projectTitle}
            </button>
            <div className='bg-midnight text-white w-96'>
                <div className='font-semibold'>
                    {projectInstructions}
                </div>
                {projectContent}
            </div>  
        </div>
    );
}

export default ProjectDropdown;