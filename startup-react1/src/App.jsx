import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/login'
import Saved from './saved/saved';
import Home from './home/home';
import Pedia from './pedia/pedia';
import About from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login 
            userName={userName}
            authState={authState}
            onAuthChange={(userName, authState) => {
              setAuthState(authState);
              setUserName(userName);
            }}
          />} 
          exact
        />
        <Route path="/home" element={<Home />} />
        <Route path="/pedia" element={<Pedia />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={
          <Login
            userName={userName}
            authState={authState}
            onAuthChange={(userName, authState) => {
              setAuthState(authState);
              setUserName(userName);
            }}
          />
        }
      /> */}
      <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
