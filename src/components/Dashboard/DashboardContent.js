/* I added an 'edit' to allow a user to select which course they want feedback and review for */ 
//Import Components
import courses from "../../data/courses/metadata.json"
import { EnrolledCourse } from "../Courses/EnrolledCourse/EnrolledCourse";


//Import Dependencies
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebaseConfig'; 
import { getDocs,
	collection,
	addDoc,
	deleteDoc,
	updateDoc,
	doc
 } from 'firebase/firestore';


export const DashboardContent = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [userUID, setUserUID] = useState(null);
  
    useEffect(() => {
      const currentUser = auth.currentUser;
      //console.log('Dashboard:', currentUser)
      const enrolledCoursesData = [];
  
      if (currentUser) {
        // Access the user's UID.
        setUserUID(currentUser.uid);
        // Reference to the user's document in the "enrollments" collection.
        const fetchData = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, "enrollment"));
              querySnapshot.forEach((doc) => {
                if(doc.id === userUID){
                  enrolledCoursesData.push(doc.data())
                }
              });
              setEnrolledCourses(enrolledCoursesData);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
        //console.log(querySnapshot);
  
        // userDocRef.get().then((doc) => {
        //   if (doc.exists) {
        //     const enrolledCoursesReferences = doc.data().enrolledCourses;
        //     const coursesPromises = enrolledCoursesReferences.map((courseReference) =>
        //       courseReference.get()
        //     );
  
        //     Promise.all(coursesPromises)
        //       .then((courseDocs) => {
        //         const enrolledCoursesData = courseDocs
        //           .filter((courseDoc) => courseDoc.exists)
        //           .map((courseDoc) => courseDoc.data());
  
        //         setEnrolledCourses(enrolledCoursesData);
        //         console.log(enrolledCoursesData)
        //       })
        //       .catch((error) => {
        //         console.error('Error fetching course documents:', error);
        //       });
        //   } else {
        //     console.log('User document does not exist.');
        //   }
        // }).catch((error) => {
        //   console.error('Error fetching user document:', error);
        // });
      }
    }, [userUID]);

    return(
        // Review and feedback
        <>
            {console.log('enrolled courses in return:', enrolledCourses)}
            <div className="flex flex-col gap-8 my-8 sm:flex-row">
                <div class="sm:flex-1 bg-white shadow-sm p-4">
                    <h2 className="text-xl font-bold inline"> Personalized Feedback </h2>                  
                    <p class="mt-4"> We've kept a list of all your feedbacks. </p>
                    <div className="flex flex-row place-content-between items-center">
                        <button className="mt-8 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded"> Feedbacks </button>
                        <a href="a" className="mt-8 text-indigo-500"> Edit </a>  
                    </div>
                </div>
                
                <div className="sm:flex-1 bg-white shadow-sm p-4"> 
                    <h2 className="text-xl font-bold"> Personalized Review </h2>
                    <p className="mt-4"><strong>Topic:</strong> Arrow Functions</p>
                    <div className="flex flex-row place-content-between items-center">
                        <button className="mt-8 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded">Review</button>
                        <a href="a" className="mt-8 text-indigo-500">Edit</a>  
                    </div>
                </div>
            </div>

            {/* CourseList component goes here */}
            <div className="bg-white shadow-sm p-4">
                <h2 className="text-xl font-bold">Your Courses</h2>
                {enrolledCourses.map((course, id) => (
				    <EnrolledCourse key={id} id={userUID} name={course.title} syllabus={course.syllabus} />
			    ))}
            </div>
        </>
    );
};

