import { useState } from "react";
import UserFeedback from "./UserFeedback";

function FeedbackSort( {feedbackArray} ){
    const[isPressed, setPressed] = useState(false);
    const [sortingBy, setSorted] = useState('Default');
    const [sortedArray, setSortedArray] = useState(feedbackArray);


    const changePressedState = () => {
        setPressed(!isPressed);
    }

    const changeSortingBy = (course) =>{
        setSorted(course);
    }

    const doSort = () =>{
        let temp = [];
        for(let i = 0; i < 2; i++){
            for(let j = 0; j < feedbackArray.length; j++){
                if (i== 0 && (feedbackArray[j][0] === sortingBy)){
                    temp.push(feedbackArray[j]);
                }
                else if (i == 1 && (feedbackArray[j][0] !== sortingBy)){
                    temp.push(feedbackArray[j])
                }
            }
        }
        setSortedArray(temp);
    }

    const JavaScriptSorting = () =>{
        changeSortingBy('JavaScript')
    }

    const PythonSorting = () => {
        changeSortingBy('Python');
    }

    let sortContent = null;

    if (isPressed){
        sortContent = (
            <ul>
                <li><button className="text-4xl font-semi-bold" onClick={JavaScriptSorting}>Sort By JavaScript</button></li>
                <li><button className="text-4xl font-semi-bold" onClick={PythonSorting}>Sort By Python</button></li>
                <li><button className="text-4xl font-semi-bold" onClick={doSort}>Do Sort</button></li>
            </ul>
        )
    }

    return(
        <div className="flex justify-center">
            <div>
                <button onClick={changePressedState} className="mr-28 text-5xl font-semi-bold">
                    Sort Feedback
                </button>
                <div className="">
                    {sortContent}
                </div>
            </div>
            <div>
                {sortedArray.map((feedback) => (
                    <UserFeedback course={feedback[0]} feedbackToUser={feedback[1]} feedbackID={feedback[2]}/>
                ))}
            </div>
        </div>
    );
}

export default FeedbackSort;