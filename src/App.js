import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Nav from './component/Navs/Nav';
import Footer from './component/Footer/Footer';
import StafiCrud  from './component/StafiCrud';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Header from './component/Home/Header';
import LoginForm  from './component/Login/LoginForm';
import Registration from './component/Login/Registration';



function App() {
  return (
    <>
    <Fragment>
           <Nav />
          
      <Routes>
           <Route exact path="/" Component={Home} />
           <Route exact path="/login" Component={LoginForm} />
           <Route exact path="/registration" Component={Registration} />
      </Routes> 
       


    </Fragment>
   
  </>
  );
}

export default App;
