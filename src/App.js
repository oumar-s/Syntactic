// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
// Import components
import { Nav } from './components/Nav/Nav';
import { Courses } from './routes/Courses/Courses';
import { Home } from './routes/Home/Home';
import {Dashboard} from './routes/Dashboard/Dashboard'
import { Login } from './routes/Login/Login';
import { db } from './config/firebase-config';
import { getDocs,
	collection,
	addDoc,
	deleteDoc,
	updateDoc,
	doc
 } from 'firebase/firestore';

// Import styles
import './App.css';

function App() {
	const [enrollmentList, setEnrollmentList] = useState([]);
	const enrollmentCollectionRef = collection(db, 'user_enrollment');
 	
	useEffect(() => {
		const getEnrollmentList = async () => {
			//read data
			//set enrollment list
			try {
				const data = await getDocs(enrollmentCollectionRef);
				const filteredData = data.docs.map((doc) => ({
					...doc.data()
				}));
				console.log(filteredData);
			} catch (err) {
				console.error(err);
			}
		};
		getEnrollmentList();
	}, []);

	return (
		<div className='App font-cabin'>
			<Router>
				<Nav />
				<div className='body-wrap'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</Router>
			
		</div>
	);
}

export default App;
