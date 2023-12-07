function TempFeedback({ feedback }) {
	return (
		<div className='mb-10'>
			<div className='text-base md:text-xl font-bold bg-slate-900 p-4 rounded-md'>
				<h3 className='text-sm md:text-xl font-semibold'>
					Topic : {feedback.course}
				</h3>
				<div className='feedback-wrapper bg-slate-600 rounded-md pb-4'>
					<div className='px-4 pt-4 my-4 rounded-md'>
						<h4 className='text-sm md:text-lg mb-2 font-normal'>Problem:</h4>
						<p className='font-mono text-sm md:text-base text-gray-200'>
							{feedback?.practiceProblem}
						</p>
					</div>
					<div className='py-0 px-4 ml-4 border-l-2 border-slate-900'>
						<div className='p-3 rounded-md border-2 bg-gray-600 border-slate-900'>
							<h4 className='text-sm md:text-lg mb-2 font-normal'>Feedback:</h4>
							<p className='font-mono text-sm md:text-base text-gray-200'>
								{feedback.feedback}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TempFeedback;
