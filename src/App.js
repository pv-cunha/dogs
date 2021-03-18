import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import NotFound from './Components/Helper/NotFound';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
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
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <ProtectedRoute path="/conta/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserState>
      </BrowserRouter>
    </div>
  );
};

export default App;
