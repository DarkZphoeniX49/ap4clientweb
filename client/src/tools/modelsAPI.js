

//WARNING USE ONLY CLASS FOR FETCH API'S DATA, NO FUNCTION OR CONST COMPONENT 

componentDidMount() {  //didmount will charge after the rendering the data from api
    fetch(               //fetch data from server with ip address and port and adapted routes 
"http://127.0.0.1:8000/api/Bar")
        .then((res) => res.json()) //convert into json
        .then((json) => { //if done => make a state with the object which contain the date named items and dataisloaded allow to show data if the links is ok, else it's false and need to wait data
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
};





const { DataisLoaded, items } = this.state;     //  data is loaded from API fetch, 
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ; //return wait if problem or lattence between client and API
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( //fetch item, the keys are the name of collums of TABLE in SQL BDD
                <ol key = { item.ID_BAR } >
                    User_Name: { item.NOMBAR}, 
                    Full_Name: { item.ADRESSE }, 
                    User_Email: { item.OUVERTURE } 
                    </ol>
                ))
            }
        </div>)