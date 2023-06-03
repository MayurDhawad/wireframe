import { Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import { RequireAuth } from './components/RequireAuth';
import { AuthProvider } from './components/auth';
import Profile from './components/Profile';
import Products from './components/Products';

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='products' element={<Products /> }></Route>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='registration' element={<Registration />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
