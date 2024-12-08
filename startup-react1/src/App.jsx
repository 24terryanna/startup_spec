import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './saved/saved';
import Home from './home/home';
import Pedia from './pedia/pedia';
import About from './about/about';
//import { AuthState } from './login/authState';
import './App.css'

function App() {
  // const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  // const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  // const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pedia" element={<Pedia />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
