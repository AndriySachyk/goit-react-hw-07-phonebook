import { createSlice } from "@reduxjs/toolkit";
import { addContactsThunk, deleteContactsThunk, getAllContactsThunk } from "./thunks";
import {  handleContactFulfilled, handleCreateContactFulfilled,  handleDeleteContactFulfilled,  handleFulfilled, handlePending, handleRejected } from "./handlers";


const sliceContacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null   
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllContactsThunk.fulfilled, handleContactFulfilled)
        .addCase(deleteContactsThunk.fulfilled, handleDeleteContactFulfilled)
        .addCase(addContactsThunk.fulfilled, handleCreateContactFulfilled)
        .addMatcher(
            (action)=> action.type.endsWith('/fulfilled'),
            handleFulfilled
        )
        .addMatcher(
            (action)=> action.type.endsWith('/pending'),
            handlePending
        )
        .addMatcher(
            (action)=> action.type.endsWith('/rejected'),
            handleRejected
        )
    },
    
})


export const contactsReducer = sliceContacts.reducer

