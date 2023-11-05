// Import dependencies
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { auth } from './config/firebaseConfig'; // Import your Firebase auth configuration

// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';
import { Dashboard } from './routes/Dashboard/Dashboard';
import { Login } from './routes/Login/Login';
import { Profile } from './components/Profile/Profile';

import JavascriptRoutes from './routes/CourseMaterials/Javascript/JavascriptRoutes';
import PythonRoutes from './routes/CourseMaterials/Python/PythonRoutes';

// Import styles
import './App.css';

const ProtectedWrapper = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Navigate to='/login' />;
};

const UnauthenticatedWrapper = ({ isAuthenticated, children }) => {
	return !isAuthenticated ? children : <Navigate to='/dashboard' />;
};

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsAuthenticated(!!user);
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className='App font-cabin'>
			<Router>
				<Nav />
				<div className='body-wrap'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/courses' element={<Courses />} />
						<Route
							path='/login'
							element={
								<UnauthenticatedWrapper isAuthenticated={isAuthenticated}>
									<Login />
								</UnauthenticatedWrapper>
							}
						/>
						<Route
							path='/dashboard'
							element={
								<ProtectedWrapper isAuthenticated={isAuthenticated}>
									<Dashboard />
								</ProtectedWrapper>
							}
						/>
						<Route
							path='/profile'
							element={
								<ProtectedWrapper isAuthenticated={isAuthenticated}>
									<Profile />
								</ProtectedWrapper>
							}
						/>
					</Routes>
					<JavascriptRoutes />
					<PythonRoutes />
				</div>
			</Router> 
		</div>
	);
}

export default App;