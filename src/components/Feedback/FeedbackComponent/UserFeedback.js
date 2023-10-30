function UserFeedback( {course, feedbackToUser, feedbackID} ){
    return(
        <div>
            <div className="font-bold text-5xl" key={feedbackID}>
                <h1>Feedback {feedbackID} </h1>
            </div>
            <div className="font-semi-bold text-4xl">
                <h1>{course}</h1>
            </div>
            <div className="font-semi-bold text-4xl">
                <p>{feedbackToUser}</p>
            </div>
        </div>
    );
}

export default UserFeedback;