import { Fragment } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <Fragment>
           <Navs />
           <Home />
           <Footer />
    </Fragment>
  
  );
}

export default App;
