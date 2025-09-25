import { createContext, useEffect, useState } from "react";
import { getUserFromStorage, removeUserFromStorage, saveUserToStorage } from "../utils/storage";


export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)


useEffect(()=>{
    const connectuser=getUserFromStorage()
    if(connectuser) setUser(getUserFromStorage)
},[])

const loginuser=(email,password)=>{
    const okuser={email,password}
    setUser(okuser)
    saveUserToStorage(okuser)
}

const registeruser=(username,password)=>{
    const rgtuser={username,password}
    setUser(rgtuser)
    saveUserToStorage(rgtuser)
}

const logout=()=>{
    setUser(null)
    removeUserFromStorage()
}

<AuthContext.Provider value={{user,loginuser,registeruser,logout}}>
    {children}
</AuthContext.Provider>

}

