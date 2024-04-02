import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.jsx';
import SignUpPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Render the application using ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);