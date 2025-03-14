import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login(p) {
  const navigate = useNavigate()
  const [usertext, setusertext] = React.useState("")
  const [passwordtext, setpasswordtext] = React.useState("")
  function changeusernametext(e) {
    setusertext(e.target.value)
  }
  function registeruser() {
    localStorage.setItem(usertext, passwordtext)
    p.setusername(usertext)
  }
  async function loginuser() {
    const response = await fetch('/login', {
      method: 'post',
      body: JSON.stringify({username: usertext, password: passwordtext}),
      headers: {
        'Content-type': 'application/json; charset-UTF-8',
      },
    });
    // if (response = '200'):

    if (usertext && passwordtext) {
      const expectedpassword = localStorage.getItem(usertext)
      if (expectedpassword == passwordtext) {
        p.setusername(usertext)
        navigate("/books")
      }
      else {
        alert("bad login")
      }
    }
  }
  return (
    <main>
        <div className="username">
        username:
        <input type="username" onChange={changeusernametext}></input>
        </div>
        <br></br>
        <br/>
        <div className="password">
        password:
        <input type="password" onChange={(e)=>setpasswordtext(e.target.value)}/>
        </div>

        
        <button onClick={registeruser}>register</button>
        <button onClick={loginuser}>login</button>
        
    </main>
  );
}