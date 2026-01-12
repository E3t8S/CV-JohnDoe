import React from 'react';
import { Routes,Route, Form } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Realisations from './pages/Realisations.jsx';
import Legal from './pages/Legal.jsx';
import "./style.css";
import "./foot.css";
import "./accueil.css";
import "./realisations.css";
import "./service.css";
import "./blog.css";
import "./contact.css";
import "./legal.css";
import "./copyright.css";

export default function App(){
  return(
   <div className='App'>
    <Routes>
      <Route path='/' element = {<Accueil/>}></Route>
      <Route path='/services' element = {<Services/>}></Route>
      <Route path='/blog' element = {<Blog/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/realisations' element = {<Realisations/>}></Route>
      <Route path='/mentionslegales' element = {<Legal/>}></Route>
    </Routes>
   </div> 
  );
}
