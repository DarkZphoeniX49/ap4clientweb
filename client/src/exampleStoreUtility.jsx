import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  toggleTask,addTask } from "./redux/redux";
const props={};

export const TaskList =(props) =>{
    const tasks = useSelector(state=>state.todo)//reçois le state de redux de todo
    const dispatch = useDispatch();
    //pour un ajout :

    //mise en place state pour ajout d'une tache

    const [text,setText]=useState("");


    const handleSubmit=(event)=>{
        event.preventDefault();

        dispatch(addTask(text));

        set.Text('')
    };

    dispatch(addTask(text)); //text vaut la value de l'input

    //ex composant
    return(
        <>
            <input
                type="checkbox"
                checked={task.done} 
                onChange={()=>dispatch( toggleTask(task.id))} //on appelle la fonction pour accéler la chose
            
            />
            <span
            onClick={()=>dispatch(deleteTask(task.id))}
          >
            </span> 
            {
                //exemple pour un form avec des données a envoyer via input text  
            }
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder ='test ajout donnée text'
                value={text}//vaut la variable déclaré en state 
                onChange={(e)=> setText(e.target.value)}
            
            />
        </form>
        </>
    )
}