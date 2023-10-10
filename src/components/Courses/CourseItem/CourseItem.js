// Import Icons
import jsIcon from '../../../assets/icons/js-icon.png';
import pythonIcon from '../../../assets/icons/python-icon.png';

export const CourseItem = ({ name }) => {
	const iconMap = {
		JavaScript: jsIcon,
		Python: pythonIcon,
	};
	return (
		<div className='course-item-wrap my-5'>
			<div className='course-item bg-midnight border-2 border-black text-white rounded-md p-3'>
				<div className='flex items-center'>
					<div className='course-icon w-12 h-12'>
						<img src={iconMap[name]} alt={name} className='invert' />
					</div>
					<h1 className='ml-4 text-xl'>{name}</h1>
				</div>
			</div>
		</div>
	);
};
