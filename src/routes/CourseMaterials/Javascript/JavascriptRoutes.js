// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Logging from './ch.1/Javascript1.1';
import Examination from './ch.1/Javascript1.3';
import Introduction from './ch.1/Javascript1.0';
import DataTypesAndVariables from './ch.1/Javascript1.2';

function JavascriptRoutes() {
	return (
		<div className=''>
            <Routes>
                <Route path='/javascript/1.0' element={<Introduction />} />
                <Route path='/javascript/1.1' element={<Logging />} />
                <Route path='/javascript/1.2' element={<DataTypesAndVariables />} />
                <Route path='/javascript/1.3' element={<Examination />} />
                
            </Routes>
		</div>
	);
}

export default JavascriptRoutes;