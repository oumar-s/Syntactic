import { OpenAI } from 'openai';



export const generatePracticeProblems = async (
	topic,
	currentProblems,
	setIsLoading,
) => {
	setIsLoading(true); // start loading (for the button)
	try {
		const response = await fetch('http://127.0.0.1:5000/api/runcode', {
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
