import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { auth, db } from '../../config/firebaseConfig';
import {
    getDoc,
    setDoc,
    arrayUnion,
    updateDoc,
    doc,
} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import Chatbot from '../../components/Chatbot/Chatbot';

import LeitnerSystem from '../../utilities/Leitner'; //Spaced Repetition Algorithm
import Chapter1 from '../CourseMaterials/Javascript/ch.1/PracticeAndExamples';

const Review = () => {
    const leitner = new LeitnerSystem(); // Create a Leitner System with 3 boxes
    let params = useParams();
    
    console.log('leitner current box', leitner.currentBox);

    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [practice, setPractice] = useState(Chapter1.exam[params.topicId]); 
    const [userUID, setUserUID] = useState(null);

	useEffect(() => {
		const currentUser = auth.currentUser;
	
		if (currentUser) {
			setUserUID(currentUser.uid);
			const fetchReviewData = async () => {
				try {
					const docRef = doc(db, 'reviews', `${userUID}`);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						console.log(
							'Document Data (review):',
							docSnap.data(),
						);
						leitner.boxes[0] = docSnap.data().Javascript.box1;
                        leitner.boxes[1] = docSnap.data().Javascript.box2;
                        leitner.boxes[2] = docSnap.data().Javascript.box2;
					} else {
						// doc.data() will be undefined in this case
						console.log('No such document!');
					}
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};

			fetchReviewData();
		}
	}, [userUID, leitner.boxes]);



    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
        setCode(value)
    }

    const handleRun = async () => {
		setOutput('Loading...');
        try {
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
	};
    const handleSubmit = async () => {
        setOutput('Loading...');
		let feedback = '';
        try {
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code, practice: practice?.practice }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            const resultJson = JSON.parse(result);
            feedback = resultJson.feedback;
            setOutput(resultJson.evaluation);
            const correctness = resultJson.evaluation;
            if((correctness.toLowerCase()) === 'correct'){
                leitner.moveToNextBox(practice);
            }else{  
                leitner.moveToFirstBox(practice);
            }

        } catch (error) {
            console.error('Error:', error.message);
        }

        const currentUser = auth.currentUser;
        if (currentUser) {
            
            //update review in Firebase
            const docRefReview = doc(db, 'reviews', `${currentUser.uid}`);
            console.log('leitner boxes', leitner.boxes);
            updateDoc(docRefReview, {
                Javascript: {box1: leitner.boxes[0], box2: leitner.boxes[1], box3: leitner.boxes[2], current: leitner.currentBox, next: leitner.getNextItemToReview()}
            });
            
            //Add feedback to Firebase
			const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				updateDoc(docRef, {
					feedbacks: arrayUnion({
						feedback: feedback,
						course: 'Javascript',
						problem: practice,
					}),
				});
			} else {
				await setDoc(docRef, {
					feedbacks: [
						{
							course: 'Javascript',
							feedback: feedback,
							problem: practice, 
						},
					],
				});
			}

        };
    };


    return (
        <div className='bg-midnight pt-8'>
            <div className='flex flex-wrap md:flex-nowrap  font-ubuntu bg-midnight text-white'>
                <div className='w-1/2 h-fit overflow-auto pl-5 pr-5'>
                    <h1 className='text-2xl md:text-4xl font-bold bg-slate-700 p-4'>
                        Review
                    </h1>
                    <p className='font-mono my-8'>
                        Answer the practive questions bellow to the best of your ability. Your performance here will be used to build your specialized review list.
                    </p>


                    <div className="w-fit p-8">
                        {Chapter1.exam[params.topicId].practice}
                        
                    </div>
                </div>

                <div className='w-1/2'>
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800">
                        <Editor
                            height="58vh"
                            language="javascript"
                            theme="vs-dark"
                            onChange={handleEditorChange}
                        />
                    </div>

                    <div className='buttons-and-info-div flex space-x-2 justify-center bg-slate-900 '>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun}>
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>

                    <div className='bg-black h-52 p-2 border-2 border-solid border-slate-800'>
                        <pre className='whitespace-pre-line'>{output}</pre>
                    </div>

                </div>
            </div>
            <Chatbot />
        </div>
    );
}

export default Review;