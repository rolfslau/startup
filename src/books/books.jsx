import React from 'react';
import { NavLink } from 'react-router-dom';

export function Books(p) {
  return (
    
    <main>

    <h2>My name is {p.username}, you killed my father, prepare to die - Inigo Montoya</h2>


    <hr/>

    <h4>The Way of Kings</h4>
    <h6>Brandon Sanderson</h6>
    <h5>⭐⭐⭐⭐</h5>
    <p>I like this book because it is always interesting even when it's slow.</p>

    <hr/>

    <h4>The Lobotomist's Wife</h4>
    <h6>Samantha Greene Woodruff</h6>
    <h5>⭐⭐</h5>
    <p>this book is not written very well</p>
    </main>
  );
}