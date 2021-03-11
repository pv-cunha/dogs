import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import UserState from './Context/UserState';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserState>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserState>
      </BrowserRouter>
    </div>
  );
};

export default App;
