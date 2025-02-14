import React from 'react';

export function Login() {
  return (
    <main>
        <div class="username">
        username:
        <input type="username"></input>
        </div>
        <br></br>
        <br/>
        <div class="password">
        password:
        <input type="password"/>
        </div>

        <NavLink className='button' to="books">login</NavLink>
        
    </main>
  );
}