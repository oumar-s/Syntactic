export const EnrolledCourse = () => {
	return (
		<div className='enrolled-courses-wrap my-5'>
			<div className='enrolled-courses-item cursor-pointer bg-gallery border-2 border-black rounded-md p-5'>
				<div className='flex flex-col items-start'>
					<h1 className='text-xl font-bold'>Course Name</h1>
					<span className='enrolled-date font-mono text-gray-500 mt-1'>
						Oct 18 2023
					</span>
				</div>
			</div>
		</div>
	);
};
