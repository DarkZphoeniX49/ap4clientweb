import {createSlice} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

//exemple de store 
const todoSlice = createSlice({//créée une slice pour une partie du store ici pour une todolist
    name:'todo',// permet de nommé le reducer afin de le retrouver
    initialState:[ 
            //mettre la valeur de départ qui pourra être modifier par la suite
            //ex : 
            {id : 1 ,text:"manger",done:false},
            {id : 2 ,text:"manger",done:false}  
    ],
    reducers:{//le reducer permet de faire des intéractions avec les données de l'inital state, premier paramètre la tache puis le deuxieme sera l'action a faire (supprimer,modif,suppr)
        addTask:(state,action)=>{//quand on appelle addTAsk on ajoute une nouvelle ligne 
           //type : todo/addTask payload : courir 
            const newTask={
                id:Date.now(),
                done:false,
                text:action.payload
            }
            
            state.push(newTask); //on ajoute la nouvelle tache au inital state existant
        },//recoi l'état actuel (valeur que l'ont veut ajouter ici, puis l'action que l'ont veut faire à l'aide d'un ID (nommé payload) en gros ça fait : ('ma valeur','mon id'))
        toggleTask:(state,action)=>{
            //type : todo/toggleTask payload : 2
                //toggle task, payload : de la tache en question
            const task = state.find(t=>t.id===action.payload);
            task.done = !task.done;
        },
        deleteTask:(state,action)=>{
            //type todo/deleteTask payload : 2
            state = state.filter(t=>t.id !== action.payload)
            return state;
        }
    }
});

const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
});

//example action creator pour redux

export const createToggle =(id)=>{
    return{
        type:'todo/toggleTask',
        payload: id
    }
}
//cela equivaut à faire : 

export const {addTask,deleteTask,toggleTask}=todoSlice.actions;