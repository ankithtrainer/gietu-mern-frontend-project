/*import axios from "axios"; */
import { VITE_API_URL } from "../config/env";
console.log(VITE_API_URL);
const API_POST_URL=VITE_API_URL+"/create";
const API_GET_ALL_CONTACT_URL=VITE_API_URL+"/contact-list";
const API_GET_BY_ID_URL=VITE_API_URL+"/find-by";
const API_UPDATE_URL=VITE_API_URL+"/update-by-id";
const API_DELETE_URL=VITE_API_URL+"/delete-by-id";
/*
export const createContact = (contactData) => axios.post(API_POST_URL,contactData);
export const getAllContacts = () => axios.get(API_GET_ALL_CONTACT_URL)
export const getContactById = (id) => axios.get(API_GET_BY_ID_URL+ '/'+ id);
export const deleteContact =  (id) => axios.delete(API_DELETE_URL + '/'+ id);
export const updateContact = (id, contact) =>axios.put(API_UPDATE_URL + '/' + id, contact);
*/
/***********************************************/
/* import authApi from "./authApi";
/***********************************************/

import authApi from "./authApi";

export const createContact = (contactData) =>
    authApi.post(API_POST_URL, contactData);
 console.log('==> '+API_GET_ALL_CONTACT_URL );
 
export const getAllContacts = () =>   
    authApi.get(API_GET_ALL_CONTACT_URL);


export const getContactById = (id) =>
    authApi.get(`${API_GET_BY_ID_URL}/${id}`);

export const deleteContact = (id) =>
    authApi.delete(`${API_DELETE_URL}/${id}`);

export const updateContact = (id, contact) =>
    authApi.put(`${API_UPDATE_URL}/${id}`, contact);


// Create Contact
// export const createContact = async (contactData) => {
//     const response = await axios.post(
//         `${API_URL}/create`,
//         contactData
//     );
//     return response.data;
// };



// Get Contact By ID
/*export const getContactById = async (id) => {
    const response = await axios.get(
        `${API_URL}/find-by/${id}`
    );
    return response.data;
};
*/

// Get Contact By Valid ID
export const getContactByValidId = async (id) => {
    const response = await axios.get(
        `${API_URL}/find-by-valid-id/${id}`
    );
    return response.data;
};

// Update Contact
/*export const updateContact = async (id, updatedData) => {
    const response = await axios.put(
        `${API_URL}/update-contact-by-id/${id}`,
        updatedData
    );
    return response.data;
};
*/

// Delete Contact
/*
export const deleteContact = async (id) => {
    const response = await axios.delete(
        `${API_URL}/delete-by-id/${id}`
    );
    return response.data;
};
*/