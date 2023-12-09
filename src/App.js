import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';

 import Services from './components/pages/Services';
import Product from './components/pages/Product';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Okuduklarım from './components/pages/Okuduklarım';
import Okuyacalarım from './components/pages/Okuyacaklarım';
import Favorites from './components/pages/Favorites';
import Support from './components/pages/Support';
import LogOut from './components/pages/LogOut';
function App() {
  return (

<Router> 
  <Navbar/>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/services' element={<Services/>} />
      <Route path ='/product' element={<Product/>} />
      <Route path ='/contact-us' element={<ContactUs/>} />
      <Route path ='/sign-up' element={<SignUp/>} />
      <Route path ='/marketing' element={<Marketing/>} />
      <Route path ='/consulting' element={<Consulting/>} />
      <Route path ='/okuduklarım' element={<Okuduklarım/>} />
      <Route path ='/okuyacaklarım' element={<Okuyacalarım/>} />
      <Route path ='/favorites' element={<Favorites/>} />
      <Route path ='/support' element={<Support/>} />
      <Route path ='/logOut' element={<LogOut/>} />
    </Routes>
</Router>
  );
}

export default App;
