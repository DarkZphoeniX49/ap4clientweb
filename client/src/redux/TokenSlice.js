import { createSlice } from '@reduxjs/toolkit';
const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState: {
    token: localStorage.getItem('token') || '',
    nom : localStorage.getItem('nomClient')|| '',
    idClient : localStorage.getItem('idClient')|| '',
    email : localStorage.getItem('emailClient')|| '',
  },
  reducers: {
    getToken: (state, action) => {
       return state.token;
    },
    getUserInfo:(state,action)=>{
        return (state.nom, state.idClient, state.email);
    },
    deleteToken: (state, action) => {
      localStorage.removeItem('token');
      localStorage.removeItem('nomClient');
      localStorage.removeItem('idClient');
      localStorage.removeItem('emailClient');
      return state.token;
    },
    removeAllStore: (state, action) => {
        localStorage.clear();
        return state.token;
        }
  },
});

export const tokenReducer = tokenSlice.reducer;
export const {
    getToken,
    deleteToken,
    getUserInfo,
    removeAllStore

} = tokenSlice.actions;