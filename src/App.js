// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';
import {Dashboard} from './routes/Dashboard/Dashboard'
import { Login } from './routes/Login/Login';
import JavaScript1 from './routes/Content/Javascript1';
import { Editor } from 'ace-builds';

// Import styles
import './App.css';

function App() {
	return (
		<div className='App font-cabin'>
			{/* <Router>
				<Nav />
				<div className='body-wrap'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/login' element={<Login />} />
						<Route path='/javascript/1' element={<JavaScript1 />} />
					</Routes>
				</div>
			</Router> */}
			{/* <JavaScript1 /> */}
			<JavaScript1 />
		</div>
	);
}

export default App;
