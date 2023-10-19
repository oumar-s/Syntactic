// Import dependencies
import React from "react";
import { useEffect, useState } from "react";

// Import components
import { DashboardContent } from "../../components/Dashboard/DashboardContent";
import { db } from './config/firebase-config';
import { getDocs,
	collection,
	addDoc,
	deleteDoc,
	updateDoc,
	doc
 } from 'firebase/firestore';

export const Dashboard = () => {
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


    return  <div className="container mx-auto px-2"> <DashboardContent /> </div>
}
