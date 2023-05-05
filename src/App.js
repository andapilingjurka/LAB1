import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Nav from './component/Navs/Nav';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import LoginForm  from './component/LoginForm';
import Header from './component/Home/Header';



function App() {
  return (
    <>
    <Fragment>
           <Nav />
           <Home />
           <Footer />
           <Routes>
       <Route path="/" element={<Footer />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/header" element={<Header/>} />
      
      </Routes>  
    </Fragment>
   
  </>
  );
}

export default App;
