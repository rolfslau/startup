import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login(p) {
  const navigate = useNavigate()
  const [usertext, setusertext] = React.useState("")
  const [passwordtext, setpasswordtext] = React.useState("")
  function changeusernametext(e) {
    setusertext(e.target.value)
  }
  async function registeruser() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({username: usertext, password: passwordtext}),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const jsonResponse = await response.json();
    if (jsonResponse.status == 200) {
      alert('account created!')
      // localStorage.setItem(usertext, passwordtext)
      // p.setusername(usertext)
    }
    else {
    //   const errorMessage = await response.text();  // Get the error message from the response body
    // alert(errorMessage); 
      alert("account not created")
    }
    
  }
  async function loginuser() {

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({username: usertext, password: passwordtext}),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const jsonResponse = await response.json();
     if (jsonResponse.status == 200) {
    // if (usertext && passwordtext) {
      // const expectedpassword = localStorage.getItem(usertext)
      // if (expectedpassword == passwordtext) {
        p.setusername(usertext)
        navigate("/books")
      }
      else {
        alert("bad login")
      }
    }
  
  return (
    <main>
        <div className="username">
        username:
        <input type="username" id='login' onChange={changeusernametext}></input>
        </div>
        <br></br>
        <br/>
        <div className="password">
        password:
        <input type="password" id='password' onChange={(e)=>setpasswordtext(e.target.value)}/>
        </div>

        
        <button onClick={registeruser}>register</button>
        <button onClick={loginuser}>login</button>
        
    </main>
  );
}