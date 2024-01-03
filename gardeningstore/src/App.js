import './App.css';
import { Link } from 'react-router-dom';

import Login from './components/LoginPage.jsx';
import Signup from './components/SignupPage.jsx';
import Plantmain from './components/Plantmain';
import Aboutus from './components/aboutus.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './components/Product.jsx';
import Product1 from './components/Product1.jsx';
import Product2 from './components/Product2.jsx';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Plantmain/>}></Route>
        <Route path='/Signin'element={<Login/>}></Route>
        <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/About' element={<Aboutus/>}></Route>
      <Route path='/Home' element={<Plantmain/>}></Route>
      <Route path='/Plantmain' element={<Plantmain/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Product1' element={<Product1/>}></Route>
      <Route path='/Product2' element={<Product2/>}></Route>
      <Route path='/Contactus' element={<Contactus/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
