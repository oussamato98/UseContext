import { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './Nav';

export const Context = createContext();

function App() {
  const [clicked, setClick] = useState(true);

  return (
    <Context.Provider value={[clicked, setClick]}>
      <Nav />
      <h1>{clicked ? 'SignIn' : 'SignOut'}</h1>
    </Context.Provider>
  );
}

export default App;
