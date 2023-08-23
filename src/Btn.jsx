import React, { useContext, useState } from 'react';
import {Context} from './App';

function Btn() {
  const [clicked, setClick] = useContext(Context);
  return (
    <button
      onClick={() => {
        setClick(!clicked);
        console.log(clicked);
      }}
    >
      {clicked ? 'SignIn' : 'SignOut'}
    </button>
  );
}

export default Btn;
