// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';

// Import styles
import './App.css';

function App() {
	return (
		<div className='App font-cabin'>
			<div className='body-wrap'>
				<Router>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/courses' element={<Courses />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
