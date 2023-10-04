// Import dependencies
import './App.css';
import { CourseItem } from './components/Courses/CourseItem/CourseItem';

// Import components
import { Nav } from './components/Nav/Nav';
import { Home } from './routes/Home/Home';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='body-wrap'>
				{/* <Home /> */}
				<CourseItem />
			</div>
		</div>
	);
}

export default App;
