import React from 'react';
import './App.css';
import CustomNavbar from './Components/CustomNavbar.jsx';
import Home from './Components/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact.jsx';
import { Blog } from './Blog/Blog.jsx';
import Create from './Blog/Create.jsx';
import BlogDetails from './Blog/BlogDetails.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/create-blog' element={<Create />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
