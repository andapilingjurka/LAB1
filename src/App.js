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



function App() {
  return (
    <>
    <Fragment>
           <Nav />
           <Home />
           <Footer />

           <Routes>
       <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Header/>} />
        

      </Routes> 
       


    </Fragment>
   
  </>
  );
}

export default App;
