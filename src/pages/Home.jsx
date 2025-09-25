import { useContext, useEffect } from "react";
import Postitem from "../components/PostItem";
import { useNavigate } from "react-router-dom";
import { DatAContext } from "../context/DataContext";
import Navigation from "../components/Navigation";

function Home(){

    const navigate=useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/welcome')
        }
    },[user,navigate])

    const { posts }=useContext(DatAContext)

    return ( 
        <>
        < Navigation />
        <div>
            <h2> Fils actualités </h2>
            { posts.length ===0 ? (<p> Aucun post pour l'instant </p>): (posts.map( (post)=>( < Postitem  key={post.id} post={ post } /> ) )) }
        </div>
        </>
    )
}

export default Home