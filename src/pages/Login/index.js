import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import {Navigate } from "react-router-dom";

export const Login = () =>{
    const {loginGoogle, signed} = useContext(AuthGoogleContext)
    
    function login() {
        loginGoogle();

    }
    if (!signed) {
        return <button onClick={()=>loginGoogle()}>Logar com o Google</button>;

    }else{
        return <Navigate to="/home"/>
    }

}