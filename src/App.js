// Import dependencies
import './App.css';
import { CourseItem } from './components/Courses/CourseItem/CourseItem';

// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';

function App() {
	return (
		<div className='App font-cabin'>
			<Nav />
			<div className='body-wrap'>
				{/* <Home /> */}
				<Courses />
			</div>
		</div>
	);
}

export default App;
