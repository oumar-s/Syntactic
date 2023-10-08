// Import dependencies
import './App.css';
import { CourseItem } from './components/Courses/CourseItem/CourseItem';

// Import components
import { Nav } from './components/Nav/Nav';
import { Home } from './routes/Home/Home';
import { Dashboard } from './routes/Dashboard/Dashboard';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Dashboard />
			{/* <div className='body-wrap'>
				<Home />
				<CourseItem />
			</div> */}
		</div>
	);
}

export default App;
