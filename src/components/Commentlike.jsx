import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DatAContext } from "../context/DataContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Commentlike({commentID}) {
    const { user }=useContext(AuthContext)
    const { comments,setComments }=useContext(DatAContext)

    const comment=comments.find(c=>c.id===commentID)
    const isloved=comment?.love?.includes(user?.username)

    const toogleComment=()=>{
        const newcomments=comments.map((c)=>{
            if(c.id===commentID){
                const updatelove=isloved ? comments.filter((u)=>u !== user?.username ):[...(c.love || [] ),user.username]
                return { ...c,love:updatelove }
            }
            return c
        })
        setComments(newcomments)
        localStorage.setItem("comments",JSON.stringify(newcomments))
    }

    return(
        <>
        <button onClick={toogleComment} style={{ background:'none', border:'none', cursor:'pointer' }} >
            { isloved ? <FaHeart color="black" />: <FaRegHeart/> }
             <span> { comment?.love?.length || 0 } </span>
        </button>
        </>
    )
}

export default Commentlike