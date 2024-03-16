import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from "../LoginPage/LoginPage"


function App() {

  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user)
  }

  return (
    <main className="App">
      <LoginPage updateUser={updateUser}/>
    </main>
  );
}

export default App;
