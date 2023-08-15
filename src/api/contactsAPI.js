import axios from "axios"



axios.defaults.baseURL = 'https://64dba120593f57e435b13d0a.mockapi.io'

export const getAllContacts = async()=>{
    const {data} = await axios.get('/contacts')
    // console.log('data', data)
    return data
} 


export const addContacts = async (newData) =>{
    const {data} = await axios.post('/contacts', newData)
    return data
}


export const deleteContact = async (id) =>{
    const {data} = await axios.delete(`/contacts/${id}`)
    return data
}