import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DatAContext } from "../context/DataContext";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

function Buttonlikes ({postID}) {
    const { user }=useContext(AuthContext)
    const { posts,setPosts }=useContext(DatAContext)

    const post=posts.find((p)=>p.id === postID)
    const isliked=post?.like?.includes(user?.username)

    const toogleLike=()=>{
        const newposts=posts.map((p)=>{
            if(p.id===postID){
                const uppdatelike=isliked ? p.like.filter((u)=>u !== user.username):[...(p.like || [] ), user.username]
                return { ...p,like:uppdatelike }
            }
            return p
        })
        setPosts(newposts)
        localStorage.setItem("posts",JSON.stringify(newposts))
    }

    return (
        <button onClick={toogleLike} style={{ background:'none',border:'none', cursor:'pointer' }} >
            { isliked ? <FaThumbsUp color="blue"/> :< FaRegThumbsUp/> }
            <span> {post?.like?.length || 0 } </span>
        </button>
    )

}

export default Buttonlikes