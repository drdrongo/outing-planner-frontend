import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AccessAlarmIcon/>
        <ThreeDRotation/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Resact
        </a>
      </header>
    </div>
  );
}

export default App;
