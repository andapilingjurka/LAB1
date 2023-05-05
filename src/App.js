import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Nav from './component/Navs/Nav';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <>
    <Fragment>
           <Nav />
           <Home />
           <StafiCrud/>
           <Footer />
    </Fragment>
   
  </>
  );
}

export default App;
