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

        <form method="get" action="books.html">
            <br/>
            <button type="submit">login</button>
        </form>
        
    </main>
  );
}