import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate()
  const [username, setusername] = React.useState("")
  const [password, setpassword] = React.useState("")
  function changeusernametext(e) {
    setusername(e.target.value)
  }
  function registeruser() {
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
  }
  function loginuser() {
    if (username && password) {
      // localStorage.getItem('username')
      const expectedpassword = localStorage.getItem('password')
      if (expectedpassword == password) {
        navigate("/books")
      }
      else {
        alert("bad login")
      }
    }
  }
  return (
    <main>
      <div>{username}</div>
      <div>{password}</div>
        <div className="username">
        username:
        <input type="username" onChange={changeusernametext}></input>
        </div>
        <br></br>
        <br/>
        <div className="password">
        password:
        <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>

        
        <button onClick={registeruser}>register</button>
        <button onClick={loginuser}>login</button>
        
    </main>
  );
}