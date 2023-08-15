import Notiflix from "notiflix";
export const handlePending =(state)=>{
    state.isLoading = true
    state.error = ''
}


export const handleFulfilled =(state)=>{
    state.isLoading = false
}


export const handleRejected =(state, {error})=>{
    state.isLoading = false
    state.error = error.message    
}


export const handleContactFulfilled =(state, {payload})=>{
    Notiflix.Notify.info(`You have ${payload.length} contacts`);

    state.items = payload    
}


export const handleCreateContactFulfilled =(state, {payload})=>{
    state.items.unshift(payload)    
}


export const handleDeleteContactFulfilled =(state, {payload})=>{
    Notiflix.Notify.success(`You delete contacts ${payload.name}`);
    state.items = state.items.filter(item => item.id !== payload.id) 
}

