import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DashboardContent } from './components/Dashboard/DashboardContent';
import Feedback from './components/Feedback/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <DashboardContent /> */}
		<Feedback />
	</React.StrictMode>
);
