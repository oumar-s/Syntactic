// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PythonIntroduction from './ch.1/Python1.0';
import PythonLogging from './ch.1/Python1.1';
import PythonExamination1 from './ch.1/Python1.2';
import PythonDataTypesAndVariablesIntroduction from './ch.2/Python2.0';
import PythonVariables from './ch.2/Python2.1';
import PythonInput from './ch.2/Python2.2';
import PythonDataTypes from './ch.2/Python2.3';
import PythonExamination2 from './ch.2/Python2.4';
import PythonDataTypeOperations from './ch.3/Python3.0';
import PythonIntegerOperations from './ch.3/Python3.1';
import PythonStringOperations from './ch.3/Python3.2';
import PythonExamination3 from './ch.3/Python3.3';

function PythonRoutes() {
	return (
		<div className=''>
            <Routes>
                <Route path='python/1.0' element={<PythonIntroduction />} />
                <Route path='python/1.1' element={<PythonLogging />} />
                <Route path='python/1.2' element={<PythonExamination1 />} />
                <Route path='python/2.0' element={<PythonDataTypesAndVariablesIntroduction />} />
                <Route path='python/2.1' element={<PythonVariables />} />
                <Route path='python/2.2' element={<PythonInput />} />
                <Route path='python/2.3' element={<PythonDataTypes />} />
                <Route path='python/2.4' element={<PythonExamination2 />} />
                <Route path='python/3.0' element={<PythonDataTypeOperations />} />
                <Route path='python/3.1' element={<PythonIntegerOperations />} />
                <Route path='python/3.2' element={<PythonStringOperations />} />
                <Route path='python/3.3' element={<PythonExamination3 />} />
            </Routes>
		</div>
	);
}

export default PythonRoutes;