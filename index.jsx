import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function Login() {
    const [text, setText] = React.useState('');
    function loginuser() {
        localStorage.setItem('user', text)
    }

    function textChange(e) {
        setText(e.target.value)
    }
    return (
        <div className='page'>
            <h1>Login</h1>
            <input type='text' onChange={textChange} />
            <button onClick={loginuser}>Login</button>
        </div>
    )
}