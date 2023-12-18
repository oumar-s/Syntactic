import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_ApiKey,
	authDomain: process.env.REACT_APP_AuthDomain,
	databaseURL: process.env.REACT_APP_DatabaseURL,
	projectId: process.env.REACT_APP_ProjectId,
	storageBucket: process.env.REACT_APP_StorageBucket,
	messagingSenderId: process.env.REACT_APP_MessagingSenderId,
	appId: process.env.REACT_APP_AppId,
	measurementId: process.env.REACT_APP_MeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
