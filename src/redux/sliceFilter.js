const { createSlice } = require("@reduxjs/toolkit");




const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      filterContact:(state, {payload})=> {
        return( state = payload)
      },
    },
  });

export const {filterContact} = sliceFilter.actions

export const filterReducer = sliceFilter.reducer