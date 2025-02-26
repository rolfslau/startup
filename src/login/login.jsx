import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  const [username, setusername] = React.useState("")
  const [password, setpassword] = React.useState("")
  function changeusernametext(e) {
    setusername(e.target.value)
  }
  function registeruser() {
    console.log("logged in")
  }
  return (
    <main>
      <div>{username}</div>
      <div>{password}</div>
        <div class="username">
        username:
        <input type="username" onChange={changeusernametext}></input>
        </div>
        <br></br>
        <br/>
        <div class="password">
        password:
        <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>

        
        <button onClick={registeruser}>register</button>
        
    </main>
  );
}