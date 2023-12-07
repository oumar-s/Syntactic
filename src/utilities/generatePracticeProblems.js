import { OpenAI } from 'openai';

const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export const generatePracticeProblems = async (
	topic,
	currentProblems,
	setIsLoading,
) => {
	setIsLoading(true); // start loading (for the button)

	const response = await openai.chat.completions.create({
		messages: [
			{
				role: 'assistant',
				content: `Generate 5 new JavaScript practice problems for beginners, focusing on ${topic}. Each problem should be presented as a standalone statement without any preceding numbers or labels. Avoid labeling with numbers or alphabets. The problems should be unique, testing different aspects of working with variables and outputting data in JavaScript.`,
			},
		],
		model: 'gpt-3.5-turbo',
		max_tokens: 500,
	});

	// extracting the generated problems
	const newProblems = response.choices[0].message.content
		.split('\n\n')
		.map((problem) => problem.replace(/^\d+\.\s*/, ''))
		.map((formattedProblem, index) => ({
			id: currentProblems.length + index + 1,
			practice: formattedProblem,
		}));

	setIsLoading(false); // end loading

	return newProblems;
};
