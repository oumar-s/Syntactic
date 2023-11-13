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
import PythonIfElse from './ch.4/Python4.0';
import PythonIf from './ch.4/Python4.1';
import PythonElse from './ch.4/Python4.2';
import PythonElif from './ch.4/Python4.3';
import PythonExamination4 from './ch.4/Python4.4';
import PythonLoops from './ch.5/Python5.0';
import PythonForLoops from './ch.5/Python5.1';
import PythonWhileLoops from './ch.5/Python5.2';
import PythonExamination5 from './ch.5/Python5.3';
import PythonLists from './ch.6/Python6.0';
import PythonLists1 from './ch.6/Python6.1';
import PythonLists2 from './ch.6/Python6.2';
import PythonLists3 from './ch.6/Python6.3';
import PythonExamination6 from './ch.6/Python6.4';
import PythonFunctions from './ch.7/Python7.0';
import PythonFunctions1 from './ch.7/Python7.1';
import PythonFunctions2 from './ch.7/Python7.2';
import PythonFunctions3 from './ch.7/Python7.3';
import PythonExamination7 from './ch.7/Python7.4';
import PythonClasses from './ch.8/Python8.0';
import PythonClasses1 from './ch.8/Python8.1'; 
import PythonClasses2 from './ch.8/Python8.2';
import PythonClasses3 from './ch.8/Python8.3';
import PythonExamination8 from './ch.8/Python8.4';
import PythonProjects from './PythonProjects';

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
                <Route path='python/4.0' element={<PythonIfElse />} />
                <Route path='python/4.1' element={<PythonIf />} />
                <Route path='python/4.2' element={<PythonElse />} />
                <Route path='python/4.3' element={<PythonElif />} />
                <Route path='python/4.4' element={<PythonExamination4 />} />
                <Route path='python/5.0' element={<PythonLoops />} />
                <Route path='python/5.1' element={<PythonForLoops />} />
                <Route path='python/5.2' element={<PythonWhileLoops />} />
                <Route path='python/5.3' element={<PythonExamination5 />} />
                <Route path='python/6.0' element={<PythonLists />} />
                <Route path='python/6.1' element={<PythonLists1 />} />
                <Route path='python/6.2' element={<PythonLists2 />} />
                <Route path='python/6.3' element={<PythonLists3 />} />
                <Route path='python/6.4' element={<PythonExamination6 />} />
                <Route path='python/7.0' element={<PythonFunctions />} />
                <Route path='python/7.1' element={<PythonFunctions1 />} />
                <Route path='python/7.2' element={<PythonFunctions2 />} />
                <Route path='python/7.3' element={<PythonFunctions3 />} />
                <Route path='python/7.4' element={<PythonExamination7 />} />
                <Route path='python/8.0' element={<PythonClasses />} />
                <Route path='python/8.1' element={<PythonClasses1 />} />
                <Route path='python/8.2' element={<PythonClasses2 />} />
                <Route path='python/8.3' element={<PythonClasses3 />} />
                <Route path='python/8.4' element={<PythonExamination8 />} />
                <Route path='python/projects' element={<PythonProjects />} />
            </Routes>
		</div>
	);
}

export default PythonRoutes;