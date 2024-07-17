import { createContext, useContext, useEffect, useState } from "react";
import {account} from "../appwriteConfig"
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";


const AuthContext =createContext()


export const AuthProvider=({children})=>{
    const navigate = useNavigate()

    const [loading, setLoading]=useState(true)
    const [user,setuser]=useState(null)

useEffect (()=>{
    //setLoading(false)
    checkUserStatus()
}, [])



const loginUser = async(userInfo)=>{
    setLoading(true)
    try {
        let response = await account.createEmailPasswordSession(
            userInfo.email,
            userInfo.password
        )
        let accountDetails = await account.get()

        setuser(accountDetails)
        setLoading(false)
        return true;
    } catch (error) {
        console.log(error)
        setLoading(false)
        return false;
    }

    
}

const logoutUser =async()=>{
    await account.deleteSession('current')
    setuser(null)
}

const registerUser =async(userInfo)=>{
    setLoading(true)

    try {
        let response = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password1,
            userInfo.name
        )
        await account.createEmailPasswordSession(userInfo.email,userInfo.password1)
        let accountDetails =await account.get();
        setuser(accountDetails)
        navigate('/')
        setLoading(false);
        return true; // Indicate success
    } catch (error) {
        console.error(error)
        setLoading(false);
        return false; // Indicate failure
    }

}

const checkUserStatus = async ()=>{
    try {
        let accountDetails =await account.get();
        setuser(accountDetails)
    } catch (error) {
        
    }
    setLoading(false)
}


    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,

    }

    return(
    <AuthContext.Provider value={contextData}>
        {loading ? <p>Loading...</p>: children }
    </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;