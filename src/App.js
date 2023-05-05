import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';
import Footer from './component/Footer/Footer';
import StafiCrud from "./components/StafiCrud";


function App() {
  return (
    <Fragment>
           <Navs />
           <Home />
           <StafiCrud/>
           <Footer />

    </Fragment>
  
  );
}

export default App;
