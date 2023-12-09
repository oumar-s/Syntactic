// Import dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Logging from './ch.1/Javascript1.1';
import Examination from './ch.1/Javascript1.3';
import Introduction from './ch.1/Javascript1.0';
import DataTypesAndVariables from './ch.1/Javascript1.2';
import Projects from './ch.1/JavascriptProjects';
import ConditionalStatements from './ch.2/Javascript2.0';
import IntroConditionalStatements from './ch.2/Javascript2.1';
import SwitchStatements from './ch.2/Javascript2.2';
import Examination2 from './ch.2/Javascript2.3';
import Loops from './ch.3/Javascript3.0';
import LoopsBasics from './ch.3/Javascript3.1';
import LoopControlStatements from './ch.3/Javascript3.2';
import Examination3 from './ch.3/Javascript3.3';
import Functions from './ch.4/Javascript4.0';
import FunctionsBasics from './ch.4/Javascript4.1';
import Examination4 from './ch.4/Javascript4.2';
import Arrays from './ch.5/Javascript5.0';
import ArrayBasics from './ch.5/Javascript5.1';
import Objects from './ch.5/Javascript5.2';
import Examination5 from './ch.5/Javascript5.3';
import Strings from './ch.6/Javascript6.0';
import StringBasics from './ch.6/Javascript6.1';
import StringLength from './ch.6/Javascript6.2';
import StringMethods from './ch.6/Javascript6.3';
import Examination6 from './ch.6/Javascript6.4';
import ObjectLiterals from './ch.7/Javascript7.0';
import AccessingaValueinanObject from './ch.7/Javascript7.1';
import SettingPropertyInObject from './ch.7/Javascript7.2';
import ObjectMethodKeys from './ch.7/Javascript7.3';
import ObjectMethodValues from './ch.7/Javascript7.4';
import ObjectMethodForEach from './ch.7/Javascript7.5';
import Examination7 from './ch.7/Javascript7.6';
import ES6Classes from './ch.8/Javascript8.0';
import DeclaringAClass from './ch.8/Javascript8.1';
import ClassConstructor from './ch.8/Javascript8.2';
import PublicFields from './ch.8/Javascript8.3';
import PrivateFields from './ch.8/Javascript8.4';
import Getter from './ch.8/Javascript8.5';
import Setter from './ch.8/Javascript8.6';
import Examination8 from './ch.8/Javascript8.7';
import Promises from './ch.9/Javascript9.0';
import ThenAndCatch from './ch.9/Javascript9.1';
import AsyncAndAwait from './ch.9/Javascript9.2';
import Examination9 from './ch.9/Javascript9.3';

function JavascriptRoutes() {
	return (
		<div className=''>
            <Routes>
                <Route path='javascript/1.0' element={<Introduction />} />
                <Route path='javascript/1.1' element={<Logging />} />
                <Route path='javascript/1.2' element={<DataTypesAndVariables />} />
                <Route path='javascript/1.3' element={<Examination />} />
                <Route path='javascript/2.0' element={<ConditionalStatements />} />
                <Route path='javascript/2.1' element={<IntroConditionalStatements />} />
                <Route path='javascript/2.2' element={<SwitchStatements />} />
                <Route path='javascript/2.3' element={<Examination2 />} />
                <Route path='javascript/3.0' element={<Loops />} />
                <Route path='javascript/3.1' element={<LoopsBasics />} />
                <Route path='javascript/3.2' element={<LoopControlStatements />} />
                <Route path='javascript/3.3' element={<Examination3 />} />
                <Route path='javascript/4.0' element={<Functions />} />
                <Route path='javascript/4.1' element={<FunctionsBasics />} />
                <Route path='javascript/4.2' element={<Examination4 />} />
                <Route path='javascript/5.0' element={<Arrays />} />
                <Route path='javascript/5.1' element={<ArrayBasics />} />
                <Route path='javascript/5.2' element={<Objects />} />
                <Route path='javascript/5.3' element={<Examination5 />} />
                <Route path='javascript/6.0' element={<Strings />} />
                <Route path='javascript/6.1' element={<StringBasics />} />
                <Route path='javascript/6.2' element={<StringLength />} />
                <Route path='javascript/6.3' element={<StringMethods />} />
                <Route path='javascript/6.4' element={<Examination6 />} />
                <Route path='javascript/7.0' element={<ObjectLiterals />} />
                <Route path='javascript/7.1' element={<AccessingaValueinanObject />} />
                <Route path='javascript/7.2' element={<SettingPropertyInObject />} />
                <Route path='javascript/7.3' element={<ObjectMethodKeys />} />
                <Route path='javascript/7.4' element={<ObjectMethodValues/>} />
                <Route path='javascript/7.5' element={<ObjectMethodForEach />} />
                <Route path='javascript/7.6' element={<Examination7 />} />
                <Route path='javascript/8.0' element={<ES6Classes />} />
                <Route path='javascript/8.1' element={<DeclaringAClass />} />
                <Route path='javascript/8.2' element={<ClassConstructor />} />
                <Route path='javascript/8.3' element={<PublicFields />} />
                <Route path='javascript/8.4' element={<PrivateFields />} />
                <Route path='javascript/8.5' element={<Getter />} />
                <Route path='javascript/8.6' element={<Setter />} />
                <Route path='javascript/8.7' element={<Examination8 />} />
                <Route path='javascript/9.0' element={<Promises />} />
                <Route path='javascript/9.1' element={<ThenAndCatch />} />
                <Route path='javascript/9.2' element={<AsyncAndAwait />} />
                <Route path='javascript/9.3' element={<Examination9 />} />
                <Route path='javascript/projects' element={<Projects />} />
            </Routes>
		</div>
	);
}

export default JavascriptRoutes;