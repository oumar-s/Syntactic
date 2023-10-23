/* I added an 'edit' to allow a user to select which course they want feedback and review for */ 

import React from "react";

import courses from "../../data/courses/metadata.json"
import { CourseItem } from "../../components/Courses/CourseItem/CourseItem"

export const DashboardContent = () => {
    return(
        // Review and feedback
        <>
       
            <div className="flex flex-col gap-8 my-8 sm:flex-row">
                <div class="sm:flex-1 bg-white shadow-sm p-4">
                    <h2 className="text-xl font-bold inline"> Personalized Feedback </h2>                  
                    <p class="mt-4"> We've kept a list of all your feedbacks. </p>
                    <div className="flex flex-row place-content-between items-center">
                        <button className="mt-8 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded"> Feedbacks </button>
                        <a href="a" className="mt-8 text-indigo-500"> Edit </a>  
                    </div>
                </div>
                
                <div className="sm:flex-1 bg-white shadow-sm p-4"> 
                    <h2 className="text-xl font-bold"> Personalized Review </h2>
                    <p className="mt-4"><strong>Topic:</strong> Arrow Functions</p>
                    <div className="flex flex-row place-content-between items-center">
                        <button className="mt-8 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded">Review</button>
                        <a href="a" className="mt-8 text-indigo-500">Edit</a>  
                    </div>
                </div>
            </div>

            {/* CourseList component goes here */}
            <div className="bg-white shadow-sm p-4">
                <h2 className="text-xl font-bold">Your Courses</h2>
                {courses.map((course) => (
				    <CourseItem key={course.id} id={course.id} name={course.name} />
			    ))}
            </div>
        </>
    );
};

