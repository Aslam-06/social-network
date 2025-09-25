import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Commentlike from "./Commentlike";

function Commentsession (){
    const [text,setText]=useState("")

    const handlesend=(e)=>{

        if ( text.trim() === "" ){
            e.preventdefaut()
        }

        const newcomments={
            id: Date.now(),
            content:text,
            createdat:new Date().toISOString,
            love:0
        }
    
        addcomment(newcomments)
        setText("")

        }



    return (
        <>
            <div style={{ display:'flex',alignItems:'center',gap:'8px' }} >    
                <input type="text" placeholder="Ecrivez un cmmentaire..."  
                style={{ maxWidth:'90%',borderRadius:'30px',border:'solid 1px' }} 
                value={text} onChange={(e)=>setText(e.target.value)} /> 
                <button onClick={handlesend} disabled={text.trim()===""} 
                style={{ backgroundColor:'transparent',border:'none',borderRadius:'50%',padding:'10px',
                cursor: text.trim()==="" ? 'not-allowed' : 'pointer',display:'flex',alignItems:'center',justifyContent:'center'}} > < FiSend size={24} color={ text.trim()==="" ? 'gray':'green' } /> </button>  
            </div>
            < Commentlike />
        </>
    )


}

export default Commentsession