import FeedbackSort from "./FeedbackComponent/FeedbackSort";
function Feedback(){
    let userFeedbackArray = [['JavaScript','Random1', 1], ['Python','Random2', 2], ['JavaScript','Random3', 3], ['JavaScript','Random4', 4], ['Python','Random5',5]];
    return(
        <div className="mt-28 font-ubuntu bg-gallery">
            <div>
                <FeedbackSort feedbackArray={userFeedbackArray}/>
            </div>
        </div>
    );
}

export default Feedback;