import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, getAllContacts, deleteContact } from "api/contactsAPI";
import Notiflix from "notiflix";
export const getAllContactsThunk = createAsyncThunk('contacts/fetchAll',async()=>{
   try {
      return getAllContacts()
   } catch (error) {
    console.log(error)
   }
}
)

export const addContactsThunk = createAsyncThunk('contacts/addContact', async(newData)=>{
    try {
        Notiflix.Notify.success(`You have new contacts ${newData.name}`);
       return addContacts(newData)
        
    } catch (error) {
        console.log(error)
    }    

}
)


export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', async(id)=>{
    try {

        

      return  deleteContact(id)

    } catch (error) {
        console.log(error)
    }    

}
)


