import React, { useEffect, useState } from 'react'
import { getAllContacts } from './service/api-services';

const ContactList = () => {
     const[contacts, setContacts] = useState([]);

    useEffect(() => {

          getAllContacts()
              .then((response) => {
                  console.log("Response:", response);
                  setContacts(response.data);
              })
              .catch((error) => {
                  console.log("Error:", error);
              });


    },[]);


  return (
  
    <>
    
    
    
    
    </>



  )
}

export default ContactList