import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from './About-Us';
import ContactList from '../ContactList';
import Services from './Services';
import ContactUs from './Contact-Us';
import ContactDetails from '../ContactDetails';
import UpdateContact from '../UpdateContact ';
import Register from '../Sign-Up';

const Home = () => {
  return (
   <>
       <Header></Header>
       <NavBar></NavBar>
       
       <h1> This is Home Page </h1>
        
        <Footer/>
   </>
  )
}

export default Home
