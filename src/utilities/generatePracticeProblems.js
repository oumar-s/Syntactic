export const generatePracticeProblems = async (
	topic,
	currentProblems,
	setIsLoading,
) => {
	setIsLoading(true); // start loading (for the button)

	try {
		const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ topic: topic }),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch');
		}

		const result = await response.json();

		console.log(result);
		// extracting the generated problems
		const newProblems = result
			.split('\n\n')
			.map((problem) => problem.replace(/^\d+\.\s*/, ''))
			.map((formattedProblem, index) => ({
				id: currentProblems.length + index + 1,
				practice: formattedProblem,
			}));
	
		setIsLoading(false); // end loading
	
		return newProblems;
	} catch (error) {
		console.error('Error:', error.message);
	}
};
