function TempFeedback( {feedback} ){
    return(
        <div className="mb-10">
            <h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>{feedback.course}</h2>
            
            <p className='font-mono my-4'>
                {feedback.feedback}
            </p>
        </div>
    );
}

export default TempFeedback;