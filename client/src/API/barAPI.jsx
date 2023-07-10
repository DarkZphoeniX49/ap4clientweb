import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://192.168.68.32:9091"

const token = localStorage.getItem("token");
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export async function getAllBar(){
    try{
        const {data} = await axios.get(`${URL}/api/Bar`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export async function getBarById(id){
    try{
        const {data} = await axios.get(`${URL}/api/BarInfo/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export async function getAllDrinks(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getSoftDrinks(id){
    console.log(id)
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/SansAlcool/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
export async function getDrinksAlcool(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/Alcool/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getFoodList(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetNourriture/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}






export async function authUser(auth)
{
    try{
        const {data} = await axios.postForm(`${URL}/api/auth/login`, auth).then(
            (response) =>{
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("idClient", response.data.idClient);
                localStorage.setItem("nomClient", response.data.nomClient);
                localStorage.setItem("emailClient", response.data.emailClient);
                console.log(response);     
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
        return error.response;
        console.log(error.response);
    }
}

export async function registerUser(auth)
{
    try{
        const {data} = await axios.postForm(`${URL}/api/auth/register`, auth).then(
            (response) =>{
                console.log(response);
                localStorage.setItem("token", response.data.token);
               
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
        return error.response;
    }
}

export  async function sendOrder(order){

    const idBar = localStorage.getItem('idBar');
    const idClient = localStorage.getItem('idClient');
    console.log(order, idBar, idClient);
    try{
        const {data} = await axios.post(`${URL}/api/ajoutCommande/emporter/${idClient}/${idBar}`, {"order":order} , config).then(
            (response) =>{
                
                console.log(response);
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
        return error.response;
    }
}

export async function sendEmail(email){
    try{
        const {data} = await axios.post(`${URL}/api/auth/mdpOublie/Client`, email).then(
            (response) =>{
                console.log(response);
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
        return error.response;
    }
}


export async function recieveCode(code, newpwd,confirmpwd){

    const email = localStorage.getItem('emailClient');
    

    try{
        const {data} = await axios.post(`${URL}/api/auth/reset/Password`, email,code,newpwd,confirmpwd ).then(
            (response) =>{
                console.log(response);
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
    }
}

export async function authBar(auth)
{
    try{
        const {data} = await axios.postForm(`${URL}/api/auth/loginServeur`, auth).then(
            (response) =>{
                console.log(response.data);
                console.log(response.data.idBar)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("idBar", response.data.idBar);
               return response.data
            }
        );
        return data;
    }
    catch(error){
        console.log(error.response);
    }
}