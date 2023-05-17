import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Users from './components/Users';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';


function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='users' element={<RequireAuth><Users /></RequireAuth> }></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='registration' element={<Registration />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
