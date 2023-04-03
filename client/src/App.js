import './App.css';
import { useLocation, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname === '/login' || location.pathname === '/register')) {
      document.body.classList.add("appBody"); // adiciona classe ao body
      return () => {
        document.body.classList.remove("appBody"); // remove classe do body
      };
    }
  }, [location.pathname]);

  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <div className="App">
        <header className="App-header">
          <Outlet />
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Outlet />
        </header>
      </div>
    );
  }
}

export default App;
