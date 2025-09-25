import {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Postform({posts}){
    const [text,setText]=useState("")
    const [image,setImage]=useState(null)
    const [error,setError]=useState("")

    const handlesubmit =(e)=>{
        e.preventdefaut()

        if(text.trim() === "" ){
            setError("Ecrivez un text")
        }

        const newpost={
            id: Date.now(),
            content :text, image,
            createdat: new Date().toISOString,
            like:0,
            Comment:[]

        }

        addposts(newpost)
        setText("")
        setImage(null)
        setError("")

    }

    const handleimage=()=>{
        const file=e.target.files[0]

        if(!file){
            const reader=new FileReader()
            reader.onloadend=()=>{
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
    }}

    const navigate=useNavigate()
    const handleredirect=()=>{
        navigate("/")
    }

    return(
        <>
        { error && (<p style={{ color:'red',marginBottom:'4px',fontWeight:'bold' }} > {error} </p>) }
        <form onSubmit={handlesubmit} >
            <textarea name="" id="" rows={4} placeholder="Exprime toi..." ></textarea>
            <input type="file" accept="image/*" onChange={handleimage} placeholder="Sélectionné un fichier"/>
            { image && ( 
                <div>
                    <img src={image} alt="" style={{maxWidth:'100%',marginTop:'10px'}} />
                </div>
            )}
        </form>
        <div>
            <button type="submit" >Publier</button>
            <button onClick={handleredirect} >Abndonner</button>
        </div>
        </>
    )

}

export  default Postform