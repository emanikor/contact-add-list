import React, { useState, useEffect } from "react";
import {v4} from 'uuid';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";


function App() {
  const LOCAL_STORAGE_KEY ="contacts";
 const[contacts, setContacts] = useState([]);

 const addContactHandler  = (contact) => {
  console.log(contact);
  setContacts([...contacts, {id: v4(), ...contact}]);
 };

 const removeContactHandler = (id) => {
  const newContactList = contacts. filter((contact)=> {
    return contact.id !== id;
  });

  setContacts(newContactList);
 }
 useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON));
 if(retriveContacts) setContacts(retriveContacts);
 } ,[]);


 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 } ,[contacts]);
  return ( 
   <div className="ui-container">
    <Header/>
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={ contacts} getContactId={removeContactHandler}/>
   </div>
  );
}

export default App;

