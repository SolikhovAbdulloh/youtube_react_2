import React from "react";
import { useNavigate } from "react-router-dom";

function LoginYoutube({onLogin}) {

    const [username,SetUsername] = ("")
    const [password,Setpassword] = ("")
    const navigate = useNavigate()

    const AuthFunc = (e) =>{
        e.preventDefault();

        if( (username) && password === '12345'){
            
            navigate("/dashboard")
            const fakeToken = "exampleAuthToken";
            onLogin(fakeToken)
        }else{
            alert('Parol yoki Login notogri')
        }
    }

  return (
    <div>
      <form onSubmit={AuthFunc}>
        <input type="text" value={username} onChange={(e)=>SetUsername(e.target.value)} />
        <input type="password" value={password} onChange={(e) => Setpassword(e.target.value)} />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
}

export default LoginYoutube;
