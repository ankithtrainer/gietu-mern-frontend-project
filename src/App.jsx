import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./menubar/Home"
import Register from "./Register";
import Login from "./Login";
import AboutUs from "./menubar/About-Us";
import Services from "./menubar/Services";
import ContactUs from "./menubar/Contact-Us";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import UpdateContact from "./UpdateContact ";
import SignUP from "./Sign-Up";
import Header from "./Header";
import NavBar from "./NavBar";
function App() {
  
  return (
    <div>
        <h1> We are starting our Journey To React !!</h1>
       
         <BrowserRouter>
          <Header></Header>
          <NavBar></NavBar>
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/contact-list" element={<ContactList/>}/>
            <Route path="/contact-by-id/:id" element={<ContactDetails/>}/>
            <Route path="/update-contact/:id" element={<UpdateContact/>}/>         
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUP/>}/>
         </Routes>             
      </BrowserRouter>
   
    </div>
  )
}

export default App
