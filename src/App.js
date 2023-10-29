// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';
import {Dashboard} from './routes/Dashboard/Dashboard'
import { Login } from './routes/Login/Login';

import JavascriptRoutes from './routes/CourseMaterials/Javascript/JavascriptRoutes';

// Import styles
import './App.css';

function App() {
	return (
		<div className='App font-cabin'>
			<Router>
				<Nav />
				<div className='body-wrap'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/login' element={<Login />} />
					</Routes>
					<JavascriptRoutes />
				</div>
			</Router> 
		</div>
	);
}

export default App;
