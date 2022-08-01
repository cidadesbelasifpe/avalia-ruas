import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import {Navigate } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FcGoogle } from "react-icons/fc";

export const Login = () =>{
    const {loginGoogle, signed} = useContext(AuthGoogleContext)
    
    function login() {
        loginGoogle();
    }

    if (!signed) {
        return (
            <div className="app">
            <form>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Logar com conta Google</label>
            </div>
            <div className="mb-3">
            <label className="label-login" onClick={()=>login()}><FcGoogle className="icons" /> Continuar com conta Google </label>
            </div>
          </form>
         </div>
        )
    } else{
        return <Navigate to="/home"/>

    }

}