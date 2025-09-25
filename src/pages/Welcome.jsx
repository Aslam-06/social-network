import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Welcome() {

    const { user }=useContext(AuthContext)

    const navigate=useNavigate()

    useEffect(()=>{
        if(user){ 
            navigate('/')
        }
    },[user,navigate])

    

    return(
        <>
        < Container className="text-center mt-5" >
            <div>
                <h1> Bienvenue sur SphèreConnect </h1>
                <p> Rejoignez notre communauté dès maintenant </p>
            </div>
            <div>
                <button onClick={()=>navigate('/register')} className="m-2" variant="primary" >Inscription </button>
                <button onClick={()=>navigate('/login')} className="m-2" variant="success" >Connexion </button>
            </div>
        </Container>
        </>
    )
    
}

export default Welcome