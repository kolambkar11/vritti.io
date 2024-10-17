
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login'
import Nav from './components/common/nav/Nav';
import Register from './components/register/Register'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './components/profile/Profile';
import Test from './components/test';

function App() {

  return (
    <>
    {/* <Router>
      <Nav/>
      <Routes>
      <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
        <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
        <Route activeClassName="active_class" exact path="/register" element={<Register />}></Route>
        <Route activeClassName="active_class" exact path="/dashboard" element={<Dashboard />}></Route>
        <Route activeClassName="active_class" exact path="/profile" element={<Profile />}></Route>
      </Routes>
        <Footer/>
    </Router> */}

    <Test/>
    </>
  )
}

export default App
