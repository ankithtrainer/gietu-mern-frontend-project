import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./Footer"
import Header from "./Header"
import NavBar from "./NavBar"
import Home from "./menubar/Home"
import AboutUs from "./menubar/About-Us"
import Services from "./menubar/Services"
import Contact from "./menubar/Contact-Us"
import Register from "./Register";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import UpdateContact from "./UpdateContact ";
function App() {
  
  return (
    <div>
        <h1> We are starting our Journey To React !!</h1>
       
      <Header></Header>
      <NavBar></NavBar>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contact-list" element={<ContactList/>}/>
            <Route path="/contact-by-id/:id" element={<ContactDetails/>}/>
            <Route path="/update-contact/:id" element={<UpdateContact/>}/>         
            <Route path="/register" element={<Register/>}/>
         </Routes>             
      </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App
