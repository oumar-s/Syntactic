// Import dependencies
import { CourseItem } from '../../components/Courses/CourseItem/CourseItem';

// Import data
import courses from '../../data/courses.json';

export const Courses = () => {
	document.title = 'Explore Courses';

	return (
		// <div className='courses-wrap bg-blue-200 sm:bg-green-200 md:bg-yellow-200 lg:bg-red-200 w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/4 m-auto mt-20'>
		<div className='courses-wrap w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/4 m-auto mt-20'>
			<h1 className='p-4 text-center font-bold text-3xl mb-4'>
				Explore the courses
			</h1>
			<h4 className='font-bold text-xl mb-6'>
				Welcome! Here, you'll find a diverse range of courses tailored to meet
				various learning needs.
			</h4>
			<p className='text-gray-600 text-lg mb-6'>
				Our courses come with interactive lessons, real-world projects. Take
				your first step towards mastering a new skill or advancing in your
				career. Browse through our extensive catalog and find the course that's
				just right for you.
			</p>
			{courses.map((course) => (
				<CourseItem key={course.id} id={course.id} name={course.name} />
			))}
		</div>
	);
};
