import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Expenses from './routes/expenses';
import Outings from './routes/outings';
import OutingsShow from './routes/outing';

import ThemeProvider from './providers/theme_provider';


ReactDOM.render(
  <ThemeProvider>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="outings" element={<Outings />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an outing</p>
                </main>
              }
            />
            <Route path=":outingId" element={<OutingsShow />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
